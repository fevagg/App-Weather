const router = require("express").Router();
const path = require("path");

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "../../index.html"))
});

router.get("/about", (req, res)=>{
    res.sendFile(path.join(__dirname, "../../about.html"))
});

module.exports = router;