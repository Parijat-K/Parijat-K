import type { APIRoute } from 'astro';
import satori from 'satori';
import sharp from 'sharp';

export const prerender = false;

/**
 * Load a Google Font as ArrayBuffer for Satori
 * Fetches the font in TTF format (required by Satori, WOFF2 not supported)
 */
async function loadGoogleFont(
  family: string,
  weight: number
): Promise<ArrayBuffer> {
  try {
    // Construct Google Fonts API URL with specific user-agent to get TTF fonts
    const API = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:wght@${weight}`;

    console.log(`Fetching font CSS for ${family} ${weight} from:`, API);

    // Use a user-agent that will receive TTF format (not WOFF2)
    const cssResponse = await fetch(API, {
      headers: {
        // Use a bot user-agent to get TTF instead of WOFF2
        'User-Agent':
          'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
      },
    });

    if (!cssResponse.ok) {
      throw new Error(`Failed to fetch CSS: ${cssResponse.status} ${cssResponse.statusText}`);
    }

    const css = await cssResponse.text();
    console.log(`Received CSS (first 200 chars):`, css.substring(0, 200));

    // Extract font URL from CSS - try multiple patterns
    let resource = css.match(/src:\s*url\(([^)]+)\)\s*format\(['"](?:opentype|truetype)['"]\)/);

    if (!resource) {
      // Try without format specifier
      resource = css.match(/src:\s*url\(([^)]+)\)/);
    }

    if (!resource) {
      console.error('Full CSS:', css);
      throw new Error(`Failed to extract font URL from CSS for ${family} ${weight}`);
    }

    const fontUrl = resource[1].replace(/['"]/g, '');
    console.log(`Fetching font file from:`, fontUrl);

    // Fetch the actual font file
    const fontResponse = await fetch(fontUrl);

    if (!fontResponse.ok) {
      throw new Error(`Failed to fetch font file: ${fontResponse.status} ${fontResponse.statusText}`);
    }

    const arrayBuffer = await fontResponse.arrayBuffer();
    console.log(`Successfully loaded font ${family} ${weight}, size: ${arrayBuffer.byteLength} bytes`);

    return arrayBuffer;
  } catch (error) {
    console.error(`Error loading font ${family} ${weight}:`, error);
    throw error;
  }
}

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

  // Load custom fonts from Google Fonts
  // Satori REQUIRES at least one font, so we must load fonts successfully
  let fontFamilyHeading = 'Playfair Display';
  let fontFamilyBody = 'Inter';

  // Load fonts in parallel for better performance
  const [playfairData, interSemiboldData, interRegularData] = await Promise.all([
    loadGoogleFont('Playfair Display', 700),
    loadGoogleFont('Inter', 600),
    loadGoogleFont('Inter', 400),
  ]);

  const fonts = [
    {
      name: 'Playfair Display',
      data: playfairData,
      weight: 700,
      style: 'normal',
    },
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
                fontWeight: 700,
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
                    children: 'parijatkhan-home.pages.dev',
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
