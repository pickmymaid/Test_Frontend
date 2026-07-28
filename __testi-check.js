const { chromium } = require("playwright");

const widths = [1280, 1440, 1600, 1920];

(async () => {
  const browser = await chromium.launch();
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 1000 } });
    await page.goto("http://localhost:3004", { waitUntil: "load" });
    const section = page.locator('section[aria-label="Testimonials"]');
    await section.waitFor({ state: "visible", timeout: 30000 });
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    const count = await page.evaluate(() => {
      const sec = document.querySelector('section[aria-label="Testimonials"]');
      const track = sec.querySelector('.flex.gap-0, .flex');
      const cards = sec.querySelectorAll('article');
      const containerWidth = sec.getBoundingClientRect().width;
      const firstCard = cards[0]?.getBoundingClientRect();
      const visible = Array.from(cards).filter(c => {
        const r = c.getBoundingClientRect();
        return r.left >= 0 && r.right <= containerWidth + 5;
      }).length;
      return { containerWidth, cardWidth: firstCard?.width, visibleFully: visible };
    });
    console.log(width, JSON.stringify(count));
    await section.screenshot({ path: `__testi-w${width}.png` });
    await page.close();
  }
  await browser.close();
})();
