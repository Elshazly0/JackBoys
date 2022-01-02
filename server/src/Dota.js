const puppeteer = require('puppeteer')
const screenshot = 'Dota.png'
const Hero = require('./schema')

const getItems = () => {
    try {
        (async () => {
            const browser = await puppeteer.launch({ headless: false })
            const page = await browser.newPage()
            await page.setViewport({
                width: 1920,
                height: 1080
            })
            await page.goto('https://www.dota2.com/heroes', { waitUntil: 'networkidle2' })
            await page.waitForSelector('.herogridpage_HeroGrid_D36V-')
            await page.waitForTimeout(2000)
            await page.screenshot({ path: screenshot })




            const grabprices = await page.evaluate(() => {



                const nametag = document.querySelectorAll('.herogridpage_HeroName_3N-bh')




                let names = [];
                nametag.forEach((name) => {
                    names.push(name.innerText);
                    const Hero = new Hero(name)
                    Hero.save()

                })



                return names;
            })


            console.log(grabprices);

            await browser.close();
            return grabprices;



        })()

    } catch (err) {
        console.error(err)
    }

}
getItems("Jota");

module.exports = { getItems }
