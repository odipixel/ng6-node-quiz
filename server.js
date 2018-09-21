const express= require('express');
const path=require('path');
const app=express();

const posts = require('./backend/routes/posts');
//middleware
app.use(express.static(path.join(__dirname,'dist')));

app.use('/posts',posts);
//catch all routes and return it to the index
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'))
});
//set port no
const port = process.env.PORT || 8000;

app.listen(port,(req,res)=>{
    console.log(`Server is running on ${port}`);
});