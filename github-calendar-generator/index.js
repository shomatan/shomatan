const puppeteer = require('puppeteer');

(async () => {
    const URL = `https://shomatan.github.io/shomatan/github-calendar-generator/`;

    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.goto(URL);
    await page.waitForSelector('.position-relative', { timeout: 60000 })
    // await page.screenshot({ path: 'screenshot.png' });
    const data = await page.$eval('.calendar', item => {
      return item.innerHTML;
    });
    console.dir(data);

    await browser.close();
})();
