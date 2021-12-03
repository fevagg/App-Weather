const exp = require("constants");
const express = require("express");
const path = require("path");
require("dotenv").config({path:"./port.env"});

const app = express();

const port = process.env.PORT || 4500;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "../node_modules/")));
app.use(express.static(path.join(__dirname, "../css/")));
app.use(express.static(path.join(__dirname, "../js/")));
app.use(express.static(path.join(__dirname, "../public/")));

app.use(require("./routes/index.js"));

app.listen(port, ()=>{
    console.log("Listen on port: ", port);
});