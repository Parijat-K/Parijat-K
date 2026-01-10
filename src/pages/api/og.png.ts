import type { APIRoute } from 'astro';
import satori from 'satori';
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

export const prerender = false;

// Get the directory path of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Load a local font file as ArrayBuffer for Satori
 */
async function loadLocalFont(filename: string): Promise<ArrayBuffer> {
  // Font files are in src/assets/fonts/
  const fontPath = join(__dirname, '../../assets/fonts', filename);
  const buffer = await readFile(fontPath);
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}

export const GET: APIRoute = async ({ url }) => {
  const title = url.searchParams.get('title') || 'Parijat Khan';
  const subtitle = url.searchParams.get('subtitle') || 'Solution Designer & Full-Stack Developer';
  const type = url.searchParams.get('type') || 'cv';

  // Define color schemes for different sections
  const colorSchemes: Record<string, { bg: string; primary: string; secondary: string }> = {
    cv: { bg: '#0f172a', primary: '#ffffff', secondary: '#94a3b8' },
    research: { bg: '#312e81', primary: '#ffffff', secondary: '#c7d2fe' },
    projects: { bg: '#1e293b', primary: '#ffffff', secondary: '#cbd5e1' },
    blog: { bg: '#0f172a', primary: '#ffffff', secondary: '#94a3b8' },
  };

  const colors = colorSchemes[type] || colorSchemes.cv;

  // Load custom fonts from local TTF files
  // Satori REQUIRES at least one font, so we must load fonts successfully
  let fontFamilyHeading = 'Inter';
  let fontFamilyBody = 'Inter';

  // Load fonts in parallel for better performance
  const [interSemiboldData, interRegularData] = await Promise.all([
    loadLocalFont('Inter-SemiBold.ttf'),
    loadLocalFont('Inter-Regular.ttf'),
  ]);

  const fonts = [
    {
      name: 'Inter',
      data: interSemiboldData,
      weight: 600,
      style: 'normal',
    },
    {
      name: 'Inter',
      data: interRegularData,
      weight: 400,
      style: 'normal',
    },
  ];

  // Create SVG with Satori
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          backgroundColor: colors.bg,
          padding: '80px',
          fontFamily: fontFamilyBody,
          position: 'relative',
        },
        children: [
          // Decorative pattern
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                top: 0,
                right: 0,
                width: '400px',
                height: '400px',
                opacity: 0.1,
                borderRadius: '50%',
                background: colors.primary,
                filter: 'blur(100px)',
              },
            },
          },
          // Logo/Name
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '60px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '32px',
                      fontWeight: 700,
                      fontFamily: fontFamilyHeading,
                      color: colors.primary,
                      marginBottom: '8px',
                    },
                    children: 'Alex Rivera',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '18px',
                      fontWeight: 600,
                      fontFamily: fontFamilyBody,
                      color: colors.secondary,
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                    },
                    children: subtitle,
                  },
                },
              ],
            },
          },
          // Title
          {
            type: 'div',
            props: {
              style: {
                fontSize: '72px',
                fontWeight: 600,
                fontFamily: fontFamilyHeading,
                color: colors.primary,
                lineHeight: 1.1,
                maxWidth: '900px',
              },
              children: title,
            },
          },
          // Footer
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: '80px',
                left: '80px',
                right: '80px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: `2px solid ${colors.secondary}`,
                paddingTop: '30px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '24px',
                      fontWeight: 400,
                      fontFamily: fontFamilyBody,
                      color: colors.secondary,
                    },
                    children: 'parijatkhan.in',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '20px',
                      fontWeight: 600,
                      fontFamily: fontFamilyBody,
                      color: colors.secondary,
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                    },
                    children: type.toUpperCase(),
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts,
    }
  );

  // Convert SVG to PNG using Sharp
  const png = await sharp(Buffer.from(svg))
    .png()
    .toBuffer();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
