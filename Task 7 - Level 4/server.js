const express = require('express')
const app  = express()
const route=require('./route')
app.use('/',route)

app.listen(6000,()=>{
    console.log("Server listening at 6000")
})