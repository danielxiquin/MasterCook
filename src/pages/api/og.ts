// src/pages/api/og.ts
export async function GET() {
  const target = 'https://tusitio.vercel.app';
  const imgUrl = `https://i.microlink.io/?url=${encodeURIComponent(
    target
  )}&screenshot=true&embed=screenshot.url`;

  // Redirige 302 → la imagen PNG que genera Microlink
  return new Response(null, {
    status: 302,
    headers: {
      Location: imgUrl,
      'Cache-Control': 'public, max-age=3600',
    },
  });
}