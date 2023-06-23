const express = require("express");
const bodyParser = require ("body-parser");

const app = express();

app.set("view engine","ejs");


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let newItem = ["Buy Food","Cook Food","Eat Food"];
let newWork = [];

app.get("/", function(req, res){
    // res.send("hello");
    let today = new Date();
    // var day="";
    // var tday = today.getDay()
    
    // const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    // day=weekday[tday];
    
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("hi-IN",options);



    res.render("list", {listTitle: day, newItem: newItem});
    
});

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work List", newItem: newWork});
})


app.post("/", function(req, res) {
    let i = req.body.newItem;

    console.log(req.body.button);
    if (req.body.button === "Work") {
        newWork.push(i);
        res.redirect("/work");
    }
    else {
        newItem.push(i);
        res.redirect("/");
    }
    

    // console.log(newItem[-1]);
    
})

// app.post("/work", function(req, res) {
//     newWork.push(req.body.newItem);

//     // console.log(newItem[-1]);
//     res.redirect("/work");
// })

app.listen(3000, function(){
    console.log("server is running");
})