const express= require('express');
const path=require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const app=express();
const config = require('./backend/config/dbconnect');
const commonConfig = require('./backend/config/common-config');
// API file for interacting with MongoDB
const api = require('./backend/routes/api');

//Middleware for CORS
app.use(cors());
//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', commonConfig.frontendURL);    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 }); 

app.use(express.static(path.join(__dirname,'dist')));

app.use('/api',api);
app.use((req,res,next)=>{
   next();
});
//catch all routes and return it to the index
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'))
});
//set port no
const port = process.env.PORT || commonConfig.serverPort;

app.listen(port,(req,res)=>{
    console.log(`Server is running on ${port}`);
});