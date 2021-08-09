const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true,
})
.then(console.log("connected to mongoDD"))
.catch(err => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("This is the /test route");
});


app.listen("5000", () => {
    console.log("app started");
})