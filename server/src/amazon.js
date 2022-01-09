const puppeteer = require('puppeteer')
const screenshot = 'amazon.png'
const Product = require('./schema')

async function getamazonItems(itemsname) {

    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.setViewport({
        width: 1920,
        height: 1080
    })
    await page.goto('https://www.amazon.com/', { waitUntil: 'networkidle2' })
    await page.type('#twotabsearchtextbox', itemsname)
    await page.click('#nav-search-submit-button', { clickCount: 1, waitUntil: 'load' })
    await page.waitForSelector('.s-image')
    await page.waitForTimeout(2000)
    await page.screenshot({ path: screenshot })



    const grabprices = await page.evaluate(() => {



        const nametag = document.querySelectorAll('.a-size-medium.a-color-base.a-text-normal')

        const pricetag = document.querySelectorAll('.a-price-whole')

        let prices = []
        pricetag.forEach((price) => {
            prices.push(price.innerText.replace(/[^\d]/g, ''));
        })
        let names = [];
        nametag.forEach((name) => {
            names.push(name.innerText);
        })



        let products = [];

        for (let i = 0; i < names.length; i++) {
            products.push({ Name: names[i], Price: prices[i] });

        }

        return products;
    })


    const items = grabprices;
    for (let i = 0; i < items.length; i++) {

        let product = new Product(items[i]);
        product.save()
    }


    await browser.close();
    return grabprices;

}

module.exports = { getamazonItems }
