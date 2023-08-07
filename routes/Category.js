const exp = require("express");
const router = exp.Router();

const Cat = require("../model/Category_db")

router.get("/add", async (req, res) => {

    var inscat = {
        categoryname: "Grocery"
    };

    await Cat.create(inscat);

    res.send("Add Category")
})


router.get("/sel", (req, res) => {
    res.send("Select Category")
})

module.exports = router;