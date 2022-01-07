const { getamazonItems } = require("../src/amazon");
const { DotagetNames } = require("../src/Dota")
const { getjumiaItems } = require("../src/jumia");
const dotajson = require("../unitTesting/dota.api.stub")
const app = require('../src/index') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

describe('testing the Heros API ', () => {
    jest.setTimeout(80000)

    test('Testing the Heros', async (
    ) => {
        const resultss = await DotagetNames();
        expect(resultss).toEqual(dotajson);



    })

})


describe('testing the scrapping API ', () => {
    jest.setTimeout(80000)

    test('Testing the scrapping', async (
    ) => {
        const results = await getamazonItems('playstation');

        expect(results).toBeDefined();



    })

})


describe('testing the scrapping API ', () => {
    jest.setTimeout(80000)

    test('Testing the scrapping', async (
    ) => {
        const results = await getjumiaItems('playstation');

        expect(results).toBeDefined();



    })

})

