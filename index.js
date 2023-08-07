const exp = require('express'); //sys module
const app = exp();

const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://surajitshawofficial:Jdo5PJrTuo2GKIDa@cluster0.oygorkh.GMITdb.net/?retryWrites=true&w=majority"
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