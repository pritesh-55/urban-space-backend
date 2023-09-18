const mongoose = require('mongoose')

let atlas;
let compass;
mongoose.connect(`${uri}` ,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{ 
    console.log("Connection to Database Successfull")})
.catch((err)=>{ 
    console.log(`Error due to ${err}`)})