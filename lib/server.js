'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// my own modules
const portfolioRouter = require('../Routes/portfolio');
const app = express();
//Global Middlewares 
// Express middleware
app.use(express.json());
// 3rd party middleware
app.use(cors());
app.use(morgan('dev'));
app.get('/',(req,res)=>{
    res.send('hello');
  });
// all of routes code 
// add foodRouter
console.log("here !!!! ")
app.use('/', portfolioRouter);
// get /api/v1/food
// post /api/v1/food
// delete /api/v1/food/:id

module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        app.listen(PORT, ()=> {console.log(`Listening on ${PORT}`)})
    }
};