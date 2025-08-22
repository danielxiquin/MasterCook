// src/pages/api/og.ts
import chromium from '@sparticuz/chromium-min';
import puppeteer from 'puppeteer-core';

export async function GET() {
  const executablePath = await chromium.executablePath();
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: { width: 1200, height: 630 },
    executablePath,
    headless: true,
  });

  const page = await browser.newPage();
    await page.goto('https://master-cook.vercel.app', { waitUntil: 'networkidle2' });
  const buffer = await page.screenshot({ type: 'png' });
  await browser.close();

  const imageData = new Uint8Array(buffer);

  return new Response(imageData, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}