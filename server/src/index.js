const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { getamazonItems } = require("../src/amazon");
const { getjumiaItems } = require("../src/jumia");
const { DotagetNames } = require("../src/Dota")
const Products = require('./schema');
const { json } = require("express");


app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});


app.listen(3000, async (req, res) => {
    console.log(`Server listening on Port ${3000}`);

    app.get("/search/:name", async (req, res) => {
        const itemName = req.params.name


        return res.status(200).json(["    Amazon items    ", await getamazonItems(itemName), "    Jumia items    ", await getjumiaItems(itemName)]);



    });


    app.get("/amazonsearch/:name", async (req, res) => {
        const itemName = req.params.name


        return res.status(200).json((await getamazonItems(itemName)));



    });

    app.get("/jumiasearch/:name", async (req, res) => {
        const itemName = req.params.name


        return res.status(200).json((await getjumiaItems(itemName)));



    });


    app.get("/heros", async (req, res) => {



        return res.status(200).json([await DotagetNames()]);



    });


    // app.get("/hero/:Char", async (req, res) => {
    //     const Char = req.params.Char



    //     return res.status(200).json([await DotagetNames(Char)]);



    // });



    app.get("/items", async (req, res) => {

        Products.find()
            .sort({ date: -1 })
            .then(courses => res.status(200).json(courses));
    });






});




module.exports = app;