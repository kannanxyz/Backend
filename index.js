//install express 1
const express = require('express');
const { request } = require('http');

//  add variable in express js 2
const app = express();


//create route 4
app.get('/',(request,response)=>{

    response.send("Hello world");
});


// start the server 3
app.listen(3000,()=>{
    console.log(`server is running in http://localhost:3000`);
})



