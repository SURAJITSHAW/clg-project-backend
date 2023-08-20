const exp = require("express");
const router = exp.Router();

const Cat = require("../model/Category_db")

router.post("/add", async (req, res) => {

    var inscat = {
        categoryname: req.body.cname
    };

    await Cat.create(inscat);

    console.log(req.body);

    res.json({msg:"Add Category"});
})

router.post("/del", async (req, res) => {

    var id = req.body.id;

    await Cat.findByIdAndDelete(id); // delete query in mongoDB

    res.json({msg:"Delete Category"});
})


router.get("/sel",async (req, res) => {
    var data = await Cat.find();
    res.json(data);
})

module.exports = router;