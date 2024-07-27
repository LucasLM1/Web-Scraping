const puppeteer = require('puppeteer');

async function scrape(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const result = await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll('a')).map(a => a.href);
        const images = Array.from(document.querySelectorAll('img')).map(img => img.src);
        const title = document.title;
        const description = document.querySelector('meta[name="description"]')?.content || 'No description';

        return { links, images, title, description };
    });

    await browser.close();
    return result;
}

module.exports = scrape;