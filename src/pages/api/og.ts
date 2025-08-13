// src/pages/api/og.ts
import chromium from 'chrome-aws-lambda';

export async function GET() {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: { width: 1200, height: 630 },
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });

  const page = await browser.newPage();
  await page.goto('https://master-cook.vercel.app', { waitUntil: 'networkidle2' });
  const buffer = await page.screenshot({ type: 'png' });

  await browser.close();

  if (!buffer) {
    return new Response('Screenshot failed', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  return new Response(
    new Uint8Array(buffer as unknown as ArrayBuffer),
    {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=3600',
      },
    }
  );
}