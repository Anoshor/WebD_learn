//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// const items = ["Buy Food", "Cook Food", "Eat Food"];
// const workItems = [];

mongoose.connect("mongodb://127.0.0.1:27017/todolistDB",{
  useNewUrlParser:true,useUnifiedTopology:true
});

const itemsSchema = new mongoose.Schema({

  name: String

});
const Item = mongoose.model("Item",itemsSchema);

const item1 = new Item({
  name: "welcome to our list"
});
const item2 = new Item({
  name: "click + hello"
});

const defaultItems = [item1,item2];




app.get("/", function(req, res) {

// const day = date.getDate();
  Item.find().then(function(foundItems){
    if(foundItems.length==0) {
      Item.insertMany(defaultItems);
      res.redirect("/");
    }
    else{
      res.render("list", {listTitle: "today", newListItems: foundItems});
    }
    
  })
  

});

app.get("/:CustomListName", function(req,res){
  console.log(req.params.CustomListName);
});

app.post("/", function(req, res){

  const it = req.body.newItem;
  const item = new Item({
    name: it
  });

  item.save();
  res.redirect("/");


});

app.post("/delete", function(req,res) {
  it_del=req.body.checkbox;

  Item.findByIdAndRemove(it_del);
  res.redirect("/");
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
