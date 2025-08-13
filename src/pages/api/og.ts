import chromium from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

export const prerender = false;

export async function GET() {
  const executablePath = process.env.AWS_EXECUTION_ENV
    ? await chromium.executablePath
    : undefined; // Chrome local para dev

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: { width: 1200, height: 630 },
    executablePath,
    headless: chromium.headless,
  });

  const page = await browser.newPage();
  await page.goto('https://tusitio.vercel.app', { waitUntil: 'networkidle2' });

  const screenshot = await page.screenshot({
    type: 'png',
    encoding: undefined,
  });

  await browser.close();

  if (!screenshot || typeof screenshot === 'string') {
    throw new Error('No se pudo generar la captura de pantalla');
  }

  return new Response(screenshot, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
