require('dotenv').config()

const express = require('express')
const server = express()
const port = process.env.PORT || 8000
const cors = require("cors");

server.use(cors());
server.use(express.json())   
server.use(express.urlencoded({extended:false})) 

require("./database/connection")   // Database Connection
const home_routes = require("./routes/homepage")


server.use('/', home_routes)

//server.use('/api/products', routes)




// Listening to Server
const server_start = async ()=>{
    try{
        server.listen(port, ()=>{
            console.log(`The Server is listening on port no. ${port}`)
        })
    }
    catch(err){
        console.log(`Server cannot listen due to error ${err}`)
    }
}
server_start()