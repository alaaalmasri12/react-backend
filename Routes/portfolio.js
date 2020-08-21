'use strict';

const express = require('express');
const router = express.Router();

const Portfolio = require('../moudles/portfolio/portfolio-model');
const review = require('../moudles/reviews/review-model');

function getModel(req, res, next) {
    let model = req.params.model; 
    console.log(model);
    switch(model) {
        case "portfolio":
            req.model = Portfolio;
            console.log(req.model);
            next();
            return;
        case "review":
            req.model =review;
            next();
            return;
        default:
            next("Invalid Model");
            return;
    }
}
// use router.param to dynamically load the suitable model.
router.param('model', getModel);
router.get('/:model', handleGetAll);
router.get('/:model/:id',handleGetOne);
router.post('/:model', handlePost )
router.put('/:model/:id',updateOne);
router.delete('/:model/:id',deleteOne);





module.exports = router;

function handleGetAll(req, res, next) {
    console.log('enterd');
    req.model.get()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(next);
}

function handlePost(req, res, next) {

    req.model
        .post(req.body)
        .then(data => {
            res.status(201).json(data); 
        }).catch(next);
}

function handleGetOne(req, res, next) {
    let id = req.params.id;
    req.model
        .get(id)
        .then(record => res.json(record))
        .catch(next);
}
function updateOne(req, res, next) {
    let id = req.params.id;
    req.model
        .update(id)
        .then(record => res.json(record))
        .catch(next);
}
function deleteOne(req, res, next) {
    let id = req.params.id;
    req.model
        .update(id)
        .then(record => res.json(200))
        .catch(next);
}


module.exports = router;