/* web scrapping for amazon website*/

/* Puppeteer is a Node library that we can use to control a headless Chrome instance. 
    We are basically using Chrome,
    but programmatically using JavaScript. 
    
   By pupteer we can:
    scrape web pages
    automate form submissions
    perform any kind of browser automation
    create server-side rendered versions of single page apps
    make screenshots
    create automating testing 
    */

const puppeteer = require('puppeteer')
const screenshot = 'amazon.png' /* stores screenshot as amazon.png*/
const Product = require('./schema')
/* 
    An async function is a function declared with the async keyword,
     and the await keyword is permitted within them. 
    The async and await keywords enable asynchronous,
     promise-based behavior to be written in a cleaner style,
     avoiding the need to explicitly configure promise chains

*/

async function getamazonItems(itemsname) {
    /*
    the launch method initializes the instance at first, 
    and then attaching Puppeteer to that. 
    Notice this method is asynchronous  which,
     , returns a Promise. Once it’s resolved, 
    we get a browser instance that represents our initialized instance.
    */
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.setViewport({
        width: 1920,
        height: 1080
    })
    await page.goto('https://www.amazon.com/', { waitUntil: 'networkidle2' })
    //networkidle2 - consider navigation to be finished when there are no more than 2 network connections for at least 500 ms
    await page.type('#twotabsearchtextbox', itemsname) //name of search box in amazon
    await page.click('#nav-search-submit-button', { clickCount: 1, waitUntil: 'load' }) //clicking on submit 
    await page.waitForSelector('.s-image')
    await page.waitForTimeout(2000)
    await page.screenshot({ path: screenshot })

    /*


    */

    const grabprices = await page.evaluate(() => {

        /*querySelectorAll() The Document method querySelectorAll() returns a static NodeList 
                representing a list of the document's elements that match the specified group of selectors.
        */
        const nametag = document.querySelectorAll('.a-size-medium.a-color-base.a-text-normal')

        const pricetag = document.querySelectorAll('.a-price-whole')

        let prices = []
        /* 
        The forEach() method calls a function for each element in an array
        */
        pricetag.forEach((price) => {
            prices.push(price.innerText.replace(/[^\d]/g, ''));
        })
        let names = [];
        nametag.forEach((name) => {
            names.push(name.innerText);
        })

        // we pushed names and prices of products in an array

        let products = [];

        for (let i = 0; i < names.length; i++) {
            products.push({ Name: names[i], Price: prices[i] });

        }

        return products;
    })

        /*
            for loop that saves products names and price
        */
    const items = grabprices;
    for (let i = 0; i < items.length; i++) {

        let product = new Product(items[i]);
        product.save()
    }


    await browser.close();
    return grabprices;

}

module.exports = { getamazonItems }
