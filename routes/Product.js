const exp = require("express");
const router = exp.Router();
const Product = require("../model/Product_mod");

const fs = require("fs");

router.post("/add", async (req, res) => {
    var objpimg = req.files.pimg;

    objpimg.mv("./public/product_img/" + objpimg.name, async (err) => {
        if (err) {
            throw err;
        } else {
            var isobj = {
                category: req.body.category,
                pname: req.body.pname,
                pprice: req.body.pprice,
                pd: req.body.pd,
                pimg: objpimg.name,
            };

            await Product.create(isobj);
            res.json({ msg: "Product created successfully" });
        }
    });
});

router.get("/sel", async (req, res) => {
    var data = await Product.aggregate([
        // Join with user_info table
        {
            $lookup: {
                from: "categories", // other table name
                localField: "category", // name of users table field
                foreignField: "_id", // name of userinfo table field
                as: "catdata", // alias for userinfo table
            },
        },
    ]);

    res.json(data);
});

router.post("/del", async (req, res) => {
    var id = req.body.id;
    var tdata = await Product.findById(id);

    fs.unlinkSync("./public/product_img/"+tdata.pimg);

    await Product.findByIdAndDelete(id);

    res.json({ msg: "Product Deleted successfully" });
});

module.exports = router;
