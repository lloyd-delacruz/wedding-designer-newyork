import puppeteer from "puppeteer";
import { mkdirSync } from "fs";

// Usage: node screenshot.mjs <url> <label> <width> [full]
const url = process.argv[2] || "http://localhost:3001/";
const label = process.argv[3] || "shot";
const width = parseInt(process.argv[4] || "1280", 10);
const full = (process.argv[5] || "full") !== "fold";

mkdirSync("./temporary screenshots", { recursive: true });

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});
const page = await browser.newPage();
await page.setViewport({ width, height: 900, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });

// Trigger scroll-reveal (whileInView) animations across the page
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let y = 0;
    const step = Math.round(window.innerHeight * 0.6);
    const timer = setInterval(() => {
      window.scrollTo(0, y);
      y += step;
      if (y >= document.body.scrollHeight) {
        clearInterval(timer);
        setTimeout(resolve, 400);
      }
    }, 120);
  });
});
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise((r) => setTimeout(r, 900));

const path = `./temporary screenshots/${label}-${width}.png`;
await page.screenshot({ path, fullPage: full });
console.log("saved", path);

await browser.close();
