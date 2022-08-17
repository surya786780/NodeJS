//   *******************    RESTFUL API     ***************

/*  STEPS---------------------------------
      RUN THIS JS FILE
      mongod in another cmdline
      nodemon run start // used for automatically restart the server

--------------------------------------------  */
const express = require('express');
const mongoose = require('mongoose')
const url = 'mongodb://localhost/node'

const app = express();

mongoose.connect(url)
const con = mongoose.connection

con.once('open',() => {
    console.log("connected...");
})

app.use(express.json())

const nameRouter = require('./routers/name')
app.use('/name',nameRouter)



app.listen(9000, () => {
    console.log("server-started...");
})
