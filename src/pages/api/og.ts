// src/pages/api/og.ts
export async function GET() {
  // Imagen SVG de respaldo inmediata
  const svg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fafafa"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
            font-size="48" font-family="Arial" fill="#333">
        Vista previa
      </text>
    </svg>`;

  return new Response(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}