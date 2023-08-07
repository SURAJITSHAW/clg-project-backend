const exp = require("express");
const bcrypt = require("bcrypt");

const router = exp.Router();

router.get("/reg", async (req, res) => {

    var email = "surajtshaw@gmail.com";
    var password = "1234";

    const salt = await bcrypt.genSalt(10);
    const hp = await bcrypt.hash(password, salt);

    console.log(salt);
    console.log(hp);

    res.send(hp);
});

router.get("/login", (req, res) => {
    res.send("Select Product");
});

module.exports = router;
