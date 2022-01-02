const { getItems } = require("../src/amazon");

describe('testing the scrapping API ', () => {
    test('Testing the scrapping', async (done
    ) => {
        const results = await getItems('cap');
        console.log(results);
        expect(results).toBeDefined();
        done();


    })

})