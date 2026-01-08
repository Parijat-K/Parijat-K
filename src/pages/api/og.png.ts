import type { APIRoute } from 'astro';
import satori from 'satori';
import sharp from 'sharp';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const title = url.searchParams.get('title') || 'Alex Rivera';
  const subtitle = url.searchParams.get('subtitle') || 'Senior Engineer & Researcher';
  const type = url.searchParams.get('type') || 'cv';

  // Define color schemes for different sections
  const colorSchemes: Record<string, { bg: string; primary: string; secondary: string }> = {
    cv: { bg: '#0f172a', primary: '#ffffff', secondary: '#94a3b8' },
    research: { bg: '#312e81', primary: '#ffffff', secondary: '#c7d2fe' },
    projects: { bg: '#1e293b', primary: '#ffffff', secondary: '#cbd5e1' },
    blog: { bg: '#0f172a', primary: '#ffffff', secondary: '#94a3b8' },
  };

  const colors = colorSchemes[type] || colorSchemes.cv;

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
          fontFamily: 'system-ui, sans-serif',
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
                      fontWeight: 'bold',
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
                fontWeight: 'bold',
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
                      color: colors.secondary,
                    },
                    children: 'parijatkhan-home.pages.dev',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '20px',
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
