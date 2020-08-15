'use strict';

const express = require('express');
const router = express.Router();

// require food model  , use it in my router fnts.
const Portfolio = require('../moudles/portfolio/portfolio-model');

router.get('/portfolio', getportfolio);
router.post('/portfolio', postportfolio);
router.delete('/portfolio/:id', deleteportfolio);

function getportfolio(req, res, next) {
    // CRUD operation
    Portfolio.get()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(next);
}

function postportfolio(req,res, next ) {  
      // CRUD operation
    Portfolio.post(req.body)
        .then(data => {
            res.status(201).json(data); // {_id: monogid, }
        }).catch(next);
}

function deleteportfolio(req,res, next) {
    // CRUD operation
    console.log("----->>>> testing delete route ")
    Portfolio.delete(req.params.id)
        .then(data => {
            res.status(200).json(data);
        }).catch(next);
}

module.exports = router;