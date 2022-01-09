const { Given, When, Then, AfterAll, After } = require('@cucumber/cucumber');
const assert = require('assert').strict
const axios = require('axios');
var { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(40 * 1000);
/******** SCENARIO #1 ********/
Given("a string {string}", function (itemsname) {
    this.context["itemsname"] = itemsname;
});


When("I send GET request to get heros", async function () {
    this.context["response"] = await axios.get("http://localhost:3000/heros");
    console.log(this.context["response"].data[0])

});

Then("I get {} of heros", async function (excepectedResponse) {
    assert.equal(this.context["response"].data[0][0], excepectedResponse);
});



When("I send GET request to search", async function () {
    this.context["response"] = await axios.get(`http://localhost:3000/amazonsearch/${this.context["itemsname"]}`);
    console.log(this.context["response"].data[0])

});

When("I send GET request to Jumiasearch", async function () {
    this.context["response"] = await axios.get(`http://localhost:3000/jumiasearch/${this.context["itemsname"]}`);
    console.log(this.context["response"].data[0])

});

Then("I get {} of items", async function (excepectedResponse) {
    assert.equal(this.context["response"].data[0].Name, excepectedResponse);
});