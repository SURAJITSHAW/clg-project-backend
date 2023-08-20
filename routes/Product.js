const exp = require("express");
const router = exp.Router();
const Product = require("../model/Product_mod");


router.post("/add", async (req, res) => {
    var objpimg = req.files.pimg;

    objpimg.mv("./public/product_img/"+objpimg.name, async (err) => {
        if (err) {
            throw err;
        }
        else {
            var isobj = {
                category: req.body.category,
                pname: req.body.pname,
                pprice: req.body.pprice,
                pd: req.body.pd,
                pimg: objpimg.name
            };

            await Product.create(isobj);
            res.json({msg: "Product created successfully"});
        }
    })
});

router.get("/sel", async (req, res) => {
    
    var data = await Product.find();

    res.json(data);

});

module.exports = router;
