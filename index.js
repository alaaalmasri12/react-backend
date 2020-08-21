'use strict';

////require
//external packages
const mongoose = require('mongoose');
require('dotenv').config();

//internal modules (server)
const server = require('./lib/server');
const MONGODB_URI='mongodb+srv://alaa:53001498a@test1-evoja.mongodb.net/react-cv?authSource=admin&replicaSet=test1-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';

////connecting to mongoDB
const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(MONGODB_URI, mongooseOptions) 

////starting the server
server.start(process.env.PORT);