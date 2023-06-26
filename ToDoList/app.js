const express = require("express");

const app = express();
const PORT = 5000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));

const items=[];

app.get("/",function(req,res){
    res.render("list",{items : items});
});

app.post("/",function(req,res){
    var item=req.body.ele1;
    items.push(item);
    res.redirect("/");
});

app.listen(PORT,function(){
    console.log("Server started on port " + PORT);
});

