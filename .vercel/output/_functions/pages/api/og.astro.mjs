import puppeteer from 'puppeteer-core';
export { renderers } from '../../renderers.mjs';

async function GET() {
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/google-chrome",
    // Chrome incluido en Vercel
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
    defaultViewport: { width: 1200, height: 630 },
    headless: true
  });
  const page = await browser.newPage();
  await page.goto("https://master-cook.vercel.app/", { waitUntil: "networkidle2" });
  const buffer = await page.screenshot({ type: "png" });
  await browser.close();
  return new Response(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=3600"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
