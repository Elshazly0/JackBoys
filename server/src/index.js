const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const { getItems } = require("../src/amazon");
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

    app.get("/items", async (req, res) => {
        getItems("playstation")
    });
});
