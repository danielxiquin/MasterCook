// src/pages/api/og.ts
import chromium from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

export const prerender = false; 

export async function GET() {
  const executablePath = process.env.AWS_EXECUTION_ENV
    ? await chromium.executablePath 
    : undefined; 

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: { width: 1200, height: 630 },
    executablePath,
    headless: chromium.headless,
  });

  const page = await browser.newPage();
  await page.goto('https://tusitio.vercel.app', { waitUntil: 'networkidle2' });

  const result = await page.screenshot({
    type: 'png',
    encoding: undefined, 
  });

  await browser.close();

  if (!result || typeof result === 'string') {
    throw new Error('No se pudo generar la captura de pantalla');
  }

  return new Response(new Uint8Array(result), {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
