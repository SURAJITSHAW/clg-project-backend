const exp = require("express");
const router = exp.Router();
const Product = require("../model/Product_mod");


router.post("/add", async (req, res) => {
    var objpimg = req.files.pimg;

    objpimg.mv("./public/product_img/"+objpimg.name, err => {
        if (err) {
            throw err;
        }
    })
});

router.get("/sel", (req, res) => {
    res.send("Select Product");
});

module.exports = router;
