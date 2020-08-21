'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const portfolioRouter = require('../Routes/portfolio');
// const  contact = require('../Routes/contact');
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.get('/',(req,res)=>{
    res.send('hello');
  });
  
app.use('/', portfolioRouter);
async function functionlity()
{
 await app.use('/',contact);

}
functionlity();
module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 4000;
        app.listen(PORT, ()=> {console.log(`Listening on ${PORT}`)})
    }
};