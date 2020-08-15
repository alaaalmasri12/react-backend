'use strict';

const Model = require('../model');
const schema = require('../portfolio/portfolio-schema');

class Portfolio extends Model {
    constructor() {
        super(schema);
    }
}

module.exports = new Portfolio();

// require it, then make instance new Food();
// beside not doing new, use the methods directly + Singlton 