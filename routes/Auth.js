const exp = require("express");
const bcrypt = require("bcrypt");
const Admin = require("../model/Admin");
const router = exp.Router();
const jwt = require("jsonwebtoken");

router.get("/reg", async (req, res) => {


    var name = "surajt";
    var email = "shaw@gmail.com";
    var password = "1234";

    const salt = await bcrypt.genSalt(10);
    const hp = await bcrypt.hash(password, salt);

    // await Admin.create({
    //     name: name,
    //     email: email,
    //     password: hp,
    // });

    res.send(hp);
});

router.post("/login", async (req, res) => {
    var e = req.body.email;
    var p = req.body.pass;

    var logindata = await Admin.findOne({ email: e});

    if (logindata != null) {

        bcrypt.compare(p, logindata.password, (err, result) => {
            if (err) {
                throw err;
            } else {
                if (result == true) {


                    var udata = {
                        aid: logindata._id,
                        name: logindata.name
                    }


                    var jtoken = jwt.sign(udata, 'gmitkey');

                    res.json({token: jtoken});

                } else {
                    res.json({ message: 'Invalid Login' });

                }
            }
        })
        
    } else {
        res.json({ message: 'Invalid Login' });
    }
});

module.exports = router;
