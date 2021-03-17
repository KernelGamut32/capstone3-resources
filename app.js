const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send('Hello from NodeJS on EC2');
});

module.exports = app;
