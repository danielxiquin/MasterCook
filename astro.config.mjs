// src/pages/api/og.ts
import puppeteer from 'puppeteer-core';

export async function GET() {
  // Vercel expone la ruta del binario en la variable de entorno
  const browser = await puppeteer.launch({
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: { width: 1200, height: 630 },
    headless: true,
  });

  const page = await browser.newPage();
  await page.goto('https://master-cook-ocir.vercel.app/', { waitUntil: 'networkidle2' });
  const buffer = await page.screenshot({ type: 'png' });
  await browser.close();

  return new Response(buffer, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}