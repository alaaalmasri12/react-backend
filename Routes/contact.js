'use strict';

const express = require('express');
const router = express.Router();
var request = require('request');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// use router.param to dynamically load the suitable model.
router.post('/contact',handlesomething);

async function handlesomething(req, res) {
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
    await request(options, (error, response, body) => {
        console.log("message has been sent");
    });
    res.status(200).send('email sent');
}
module.exports = router;