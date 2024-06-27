
//1import express js 
const { error } = require('console');
const express = require('express');
 const fs = require('fs');
const { request } = require('http');


//2create express app
const app = express();
// 5middleware
app.use(express.json());
//4create route
app.get('/',(request,response)=>{
   if(request.url=='/'){
   response.send( `<h2 style="text-align:center;color:blue;">Hey, this is thamraiKannan!! welcome to my server </h2>
    <div style="display:flex; justify-content:center;padding:20px;"> 
    <div style=" background-color:blue; padding:20px;"> 
    <p style="color:white;background-color:white; padding:10px 40px; margin:10px 20px; text-align:center ">
      <a href="/static" style="text-decoration:none;color:black;">Get TimeStamp</a>
    </p>
    <p style="color:white;background-color:white; padding:10px 5px; margin:10px 20px; text-align:center ">
    <a href="/textfiles"  style="text-decoration:none;color:black;">Get Retrive Files</a></p>
    </div>
    </div>`)
   }
   else{
    response.status(404)
   }
})


app.get('/read',(request,response)=>{
    const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    const data =[];
    response.send(
    data.push(time)
    )
    
})


//3create server
app.listen(2000,()=>{
    console.log(`server is loading on http://localhost:2000`);
})