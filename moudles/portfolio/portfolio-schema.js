'use strict';

const mongoose = require('mongoose');

const portfolio = mongoose.Schema({
    website : {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String},
    link:{type: String},
    video:{type:String}
});

module.exports = mongoose.model('portfolio', portfolio);
