const exp = require('express'); //sys module
const cors = require('cors'); //sys module
const bodyParser = require('body-parser'); //sys module
const fu = require('express-fileupload'); //sys module
const app = exp();

app.use(exp.static('public'));

app.use(cors());
app.use(fu());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://surajitshawofficial:Jdo5PJrTuo2GKIDa@cluster0.oygorkh.mongodb.net/gmitdb?retryWrites=true&w=majority"
);

const cr = require("./routes/Category");
const pr = require("./routes/Product");
const ar = require("./routes/Auth");

app.get("/", (req, res) => {
    res.send("Hello express!");
})

app.use("/pro", pr);
app.use("/cat", cr);
app.use("/auth", ar);

app.listen(2000);