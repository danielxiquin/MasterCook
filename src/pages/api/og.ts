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
  await page.goto('https://tusitio.vercel.app', { waitUntil: 'networkidle2' });
  const buffer = await page.screenshot({ type: 'png' });

  await browser.close();

  // Convert the screenshot buffer to a Node.js Buffer and then to a Blob
  const imageBlob = new Blob([Buffer.from(buffer)], { type: 'image/png' });

  return new Response(imageBlob, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}