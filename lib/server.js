'use strict';

const express = require('express');
const morgan = require('morgan');
const  contact = require('../Routes/contact');
const portfolioRouter = require('../Routes/portfolio');
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.get('/',(req,res)=>{
    res.send('hello');
  });
  let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
  app.use(allowCrossDomain);
app.use('/',contact);
app.use('/', portfolioRouter);
module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 4000;
        app.listen(PORT, ()=> {console.log(`Listening on ${PORT}`)})
    }
};