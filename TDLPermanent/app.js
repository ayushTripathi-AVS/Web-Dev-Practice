const express = require("express");
const bodyParser = require("body-parser");
var app = express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todo");

const trySchema = new mongoose.Schema({
    name: String
});

const item = mongoose.model("task",trySchema);


app.get("/", async function(req, res) {
    try {
        const foundItems = await item.find({});
        res.render("list.ejs", { items: foundItems });
    } catch (err) {
        console.log(err);
    }
});

app.post("/",function(req,res){
    const itemName=req.body.ele1
    const todoNew= new item({
        name:itemName
    });
    todoNew.save();
    res.redirect("/");
});

app.post("/delete", async function(req, res) {
    const checked = req.body.checkbox1;
    try {
        await item.findByIdAndRemove(checked);
        console.log("Deleted");
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
});


app.listen(5500,()=>{
    console.log("Server is running")
});