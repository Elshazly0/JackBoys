const { getamazonItems } = require("../src/amazon");
const { DotagetNames } = require("../src/Dota")
const { getjumiaItems } = require("../src/jumia");
const items = require("./items.api.stub.json")
const dotajson = require("../unitTesting/dota.api.stub")
//const app = require('../src/index') // Link to your server file
jest.mock("axios");

const axios = require('axios')

const itemsjson = require('../unitTesting/items.api.stub.json')
jest.setTimeout(90000)

// describe('testing the Heros API ', () => {

//     test('Testing the Heros', async (
//     ) => {

//         axios.get.mockResolvedValueOnce(items);
//         const resultss = await DotagetNames();
//         expect(resultss).toEqual(items);


//     })

// })


describe('testing the scrapping API ', () => {

    test('Testing the scrapping', async (
    ) => {

        axios.get.mockResolvedValueOnce(items);

        results = await axios.get("http://localhost:3000/amazonsearch/playstation")
        console.log(results)

        expect(results).toBe(items);





    })

})


// describe('testing the scrapping API ', () => {

//     test('Testing the scrapping', async (
//     ) => {
//         const results = await getjumiaItems('playstation');

//         expect(results).toBeDefined();

//     })
// })

// describe('testing the items API ', () => {

//     test('Testing the items', async (
//     ) => {
//         const results = await axios.get('http://localhost:3000/items');

//         expect(results.data).toEqual(itemsjson);

//     })


// })

