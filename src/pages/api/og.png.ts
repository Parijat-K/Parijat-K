import type { APIRoute } from 'astro';
import sharp from 'sharp';

export const prerender = false;

const WIDTH = 1200;
const HEIGHT = 630;
const FONT_STACK = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
const FONT_STACK_ATTR = FONT_STACK.replace(/"/g, '&quot;');

const colorSchemes: Record<string, { bg: string; primary: string; secondary: string }> = {
  cv: { bg: '#0f172a', primary: '#ffffff', secondary: '#94a3b8' },
  research: { bg: '#312e81', primary: '#ffffff', secondary: '#c7d2fe' },
  projects: { bg: '#1e293b', primary: '#ffffff', secondary: '#cbd5e1' },
  blog: { bg: '#0f172a', primary: '#ffffff', secondary: '#94a3b8' },
};

const escapeMap: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => escapeMap[char]);
}

function wrapText(text: string, maxChars: number): string[] {
  const words = text.trim();
  if (!words) {
    return [''];
  }

  const lines: string[] = [];
  let current = '';

  for (const word of words.split(/\s+/)) {
    const proposed = current ? `${current} ${word}` : word;

    if (proposed.length <= maxChars) {
      current = proposed;
      continue;
    }

    if (current) {
      lines.push(current);
      current = '';
    }

    let slice = word;
    if (slice.length <= maxChars) {
      current = slice;
      continue;
    }

    while (slice.length > maxChars) {
      lines.push(slice.slice(0, maxChars));
      slice = slice.slice(maxChars);
    }
    current = slice;
  }

  if (current) {
    lines.push(current);
  }

  return lines.length ? lines : [''];
}

interface CreateSvgOptions {
  title: string;
  subtitle: string;
  typeLabel: string;
  colors: { bg: string; primary: string; secondary: string };
}

function createSvg({ title, subtitle, typeLabel, colors }: CreateSvgOptions): string {
  const titleLines = wrapText(title, 18);
  const subtitleLines = wrapText(subtitle.toUpperCase(), 36);

  const subtitleText = subtitleLines
    .map((line, index) => {
      const y = 140 + index * 28;
      return `<text x="80" y="${y}" fill="${colors.secondary}" font-size="20" font-weight="600" letter-spacing="4" font-family="${FONT_STACK_ATTR}">${escapeXml(line)}</text>`;
    })
    .join('');

  const titleText = titleLines
    .map((line, index) => {
      const y = 260 + index * 80;
      return `<text x="80" y="${y}" fill="${colors.primary}" font-size="72" font-weight="600" font-family="${FONT_STACK_ATTR}" letter-spacing="-1">${escapeXml(line)}</text>`;
    })
    .join('');

  const footerY = HEIGHT - 90;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg" role="img">
  <rect width="100%" height="100%" fill="${colors.bg}" />
  <circle cx="980" cy="140" r="220" fill="${colors.primary}" opacity="0.12" />
  <circle cx="1040" cy="480" r="180" fill="${colors.secondary}" opacity="0.1" />
  <text x="80" y="100" fill="${colors.primary}" font-size="34" font-weight="700" font-family="${FONT_STACK_ATTR}">Parijat Khan</text>
  ${subtitleText}
  ${titleText}
  <line x1="80" y1="${footerY}" x2="${WIDTH - 80}" y2="${footerY}" stroke="${colors.secondary}" stroke-width="2" opacity="0.4" />
  <text x="80" y="${footerY + 40}" fill="${colors.secondary}" font-size="24" font-weight="400" font-family="${FONT_STACK_ATTR}">parijatkhan.in</text>
  <text x="${WIDTH - 80}" y="${footerY + 32}" fill="${colors.secondary}" font-size="20" font-weight="600" font-family="${FONT_STACK_ATTR}" letter-spacing="8" text-anchor="end">${escapeXml(typeLabel)}</text>
</svg>`;
}

export const GET: APIRoute = async ({ url }) => {
  const title = url.searchParams.get('title') || 'Parijat Khan';
  const subtitle = url.searchParams.get('subtitle') || 'Solution Designer & Full-Stack Developer';
  const type = url.searchParams.get('type') || 'cv';

  const colors = colorSchemes[type] || colorSchemes.cv;
  const svg = createSvg({
    title,
    subtitle,
    typeLabel: type.toUpperCase(),
    colors,
  });

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
