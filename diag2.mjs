import puppeteer from "puppeteer";
const browser = await puppeteer.launch({ headless:"new", args:["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 375, height: 800 });
await page.goto("http://localhost:3001/about", { waitUntil:"networkidle0" });
await new Promise(r=>setTimeout(r,300)); // BEFORE scrolling/triggering reveals
const m = await page.evaluate(() => {
  const el = document.querySelector("div.lg\\:order-2");
  if (!el) return "not found";
  const cs = getComputedStyle(el);
  const r = el.getBoundingClientRect();
  const p = el.parentElement;
  const pcs = getComputedStyle(p);
  return {
    rect: {left:Math.round(r.left), right:Math.round(r.right), w:Math.round(r.width)},
    transform: cs.transform, opacity: cs.opacity,
    parent: { tag:p.tagName, display:pcs.display, gridCols: pcs.gridTemplateColumns, gap: pcs.columnGap, padL: pcs.paddingLeft, padR: pcs.paddingRight, w: Math.round(p.getBoundingClientRect().width) }
  };
});
console.log(JSON.stringify(m,null,2));
await browser.close();
