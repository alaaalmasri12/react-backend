'use strict';

const mongoose = require('mongoose');

const review = mongoose.Schema({
    name : {type: String, required: true},
    image: {type: String, required: true},
    review: {type: String},
});

module.exports = mongoose.model('review',review);
