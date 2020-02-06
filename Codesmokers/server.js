const express = require('express');
const bodyParser= require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000,function()
{
  console.log("its motherfuker working");
})

app.get('/',function(req,res)
{
res.sendFile(__dirname + "/index.html")

});

app.post("/",function(req,res)
{
  var username = req.body.username;
  var password = req.body.password;
  console.log(username);

})

var url = "mongodb://localhost:27017/mydb";

