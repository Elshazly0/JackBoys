const puppeteer = require('puppeteer')
const screenshot = 'jumia.png'
const Product = require('./schema')

async function getjumiaItems(itemsname) {

    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.setViewport({
        width: 1920,
        height: 1080
    })
    await page.goto('https://www.jumia.com/', { waitUntil: 'networkidle2' })
    await page.type('#fi-q', itemsname)
    await page.keyboard.press('Enter');
    await page.waitForSelector('.img-c')
    await page.waitForTimeout(2000)
    await page.screenshot({ path: screenshot })


    const grabprices = await page.evaluate(() => {



        const nametag = document.querySelectorAll('.name')

        const pricetag = document.querySelectorAll('.prc')

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
module.exports = { getjumiaItems }
