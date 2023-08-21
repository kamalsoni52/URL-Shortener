const express =require("express")
const path = require("path")
const urlRoute = require("./routes/url")
const staticRoute = require("./routes/staticURL")
const { connectToMongo } = require("./credential")
const URL = require("./models/url");
const app =express();
const PORT = 8001 ; 

connectToMongo("mongodb://127.0.0.1:27017/short-url")
.then(() => console.log("mongo started"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use("/url", urlRoute);
app.use("/", staticRoute);


app.listen(PORT, ()=>{
    console.log("URL Shortner Server Satrted")
})