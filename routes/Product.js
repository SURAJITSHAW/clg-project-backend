const exp = require("express");
const router = exp.Router();

router.get("/add", (req, res) => {
    res.send("Add Product");
});

router.get("/sel", (req, res) => {
    res.send("Select Product");
});

module.exports = router;
