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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// use router.param to dynamically load the suitable model.
router.post('/contact',handlesomething);

function handlesomething(req, res) {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var Phone = req.body.phone;
    var msg = req.body.message;
    var data = {
        "members": [{
            email_address: email,
            status: 'subscribed',
            merge_fields: {
                FNAME: firstname,
                LNAME: lastname,
                PHONE: Phone,
                MMERGE5: msg
            }
        }],
    }
    var JSONdata = JSON.stringify(data);
    console.log(JSONdata);
    var options = {
        url: 'https://us19.api.mailchimp.com/3.0/lists/d497c7c7f3',
        method: 'POST',
        headers: {
            "Authorization": "alaa c2022d468ec18180c4be2692c07ad7e9-us19"
        },
        body: JSONdata
    }
    request(options, (error, response, body) => {
        console.log("message has been sent");
    });
    res.status(200).send('email sent');
}
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