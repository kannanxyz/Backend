//1import express js 
const express = require('express');


//2create express app
const app = express();

//4create route
app.get('/',(request,response)=>{
response.send("hello world")
})


//3create server
app.listen(3001,()=>{
    console.log(`server is loading on http://localhost:3001`);
})