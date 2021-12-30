const puppeteer = require('puppeteer')
const screenshot = 'amazon.png'
const Product = require('./schema')

try {
    (async () => {
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.setViewport({
            width: 1920,
            height: 1080
        })
        await page.goto('https://www.amazon.com/', { waitUntil: 'networkidle2' })
        await page.type('#twotabsearchtextbox', "playstation")
        await page.click('#nav-search-submit-button', { clickCount: 1, waitUntil: 'load' })
        await page.waitForSelector('.s-image')
        await page.waitForTimeout(4000)
        await page.screenshot({ path: screenshot })
        pullovers = [];
        //pullovers = await page.$$('.a-offscreen')
        //await pullovers[2].click({ clickCount: 1, waitUntil: 'load' })
        //await page.waitForSelector('.imgTagWrapper')

        //await page.screenshot({ path: screenshots })

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
                const Productb = new Product(products[i]);
                Productb.save();




            }



            return products;
        })


        console.log(grabprices);

        await browser.close();
        return grabprices;
        // const goodprice = []
        // const badprice = []
        // pullovers.forEach((price) => {
        //     if (price < 10000)
        // })
        //console.log(pullovers)
    })()
} catch (err) {
    console.error(err)
}