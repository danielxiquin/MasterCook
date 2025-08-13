// src/pages/api/og.ts
import chromium from '@sparticuz/chromium-min';
import puppeteer from 'puppeteer-core';

export const config = { runtime: 'nodejs18.x' }; // Serverless Node 18

export async function GET() {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: { width: 1200, height: 630 },
    executablePath: await chromium.executablePath(),
    headless: true,
  });

  const page = await browser.newPage();
  await page.goto('https://master-cook-ocir.vercel.app', { waitUntil: 'networkidle2' });
  const buffer = await page.screenshot({ type: 'png' });
  await browser.close();

  return new Response(new Uint8Array(buffer), {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}