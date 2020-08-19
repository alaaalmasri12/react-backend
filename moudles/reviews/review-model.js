'use strict';

const Model = require('../model');
const schema = require('../reviews/review-schema');

class review extends Model {
    constructor() {
        super(schema);
    }
}
module.exports = new review();

// require it, then make instance new Food();
// beside not doing new, use the methods directly + Singlton 