const express = require('express');
const port = 8000;
const path = require('path');

const app = express();

app.set('view engine','ejs');  //setting up view engine as ejs
app.set('views',path.join(__dirname,'views'));   //setting path of views folder

app.get('/',function(req,res){
    return res.end('CSV File Reader Home Page');
});

app.listen(port,function(err){
    if(err){
        console.log("Error in running express server",err);
        return;
    }

    console.log("Server is up and running on port",port);
});