const puppeteer = require('puppeteer')
const screenshot = 'noon.png'
const Product = require('./schema')

const getItems = (itemsname) => {
    try {
        (async () => {
            const browser = await puppeteer.launch({ headless: false })
            const page = await browser.newPage()
            await page.setViewport({
                width: 1920,
                height: 1080
            })
            await page.goto('https://www.noon.com/egypt-en/', { waitUntil: 'networkidle2' })
            await page.type('#searchBar', itemsname)
          //  await page.click('["sc-14vmpd2-5 kfbZgg"]', { clickCount: 1, waitUntil: 'load' })
             page.keyboard.press('Enter');
            // // await page.waitForSelector('.s-image')
            // // await page.waitForTimeout(2000)
            // // await page.screenshot({ path: screenshot })
            // // pullovers = [];
            // //pullovers = await page.$$('.a-offscreen')
            // //await pullovers[2].click({ clickCount: 1, waitUntil: 'load' })
            // //await page.waitForSelector('.imgTagWrapper')

            // //await page.screenshot({ path: screenshots })
            // const grabprices = await page.evaluate(() => {



            //     const nametag = document.querySelectorAll('.a-size-medium.a-color-base.a-text-normal')

            //     const pricetag = document.querySelectorAll('.a-price-whole')

            //     let prices = []
            //     pricetag.forEach((price) => {
            //         prices.push(price.innerText.replace(/[^\d]/g, ''));
            //     })
            //     let names = [];
            //     nametag.forEach((name) => {
            //         names.push(name.innerText);
            //     })
            //     let products = [];

            //     for (let i = 0; i < names.length; i++) {
            //         products.push({ Name: names[i], Price: prices[i] });
            //         // const Productb = new Product(products[i]);
            //         // Productb.save();
            //     }



            //     return products;
            // })
            // const items = grabprices;
            // for (let i = 0; i < items.length; i++) {

            //     let product = new Product(items[i]);
            //     product.save()
            // }

            // console.log(grabprices);

            // await browser.close();
            // return grabprices;

        })()

    } catch (err) {
        console.error(err)
    }
  
}
getItems("Jota");

module.exports = { getItems }
