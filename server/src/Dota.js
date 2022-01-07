const puppeteer = require('puppeteer')
const screenshot = 'Dota.png'
const Hero = require('./schema')

async function DotagetNames() {

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




    const grabHeros = await page.evaluate(() => {



        const nametag = document.querySelectorAll('.herogridpage_HeroName_3N-bh')




        let names = [];

        nametag.forEach((name) => {
            names.push({ Name: name.innerText });



        })

        return names;

    })

    const items = grabHeros;
    for (let i = 0; i < items.length; i++) {

        let hero = new Hero(items[i])

        hero.save()
    }

    let Heros = []
    for (let i = 0; i < items.length; i++) {
        Heros.push(items[i].Name)

    }



    await browser.close();
    return Heros


}

module.exports = { DotagetNames }
