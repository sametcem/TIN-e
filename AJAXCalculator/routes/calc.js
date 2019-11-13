/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();


router.get('/', (req, res) => {
    res.render('calcForm');
});

router.post('/calc', jsonParser, (req, res) => {
    console.log(req.body);

    let result = 0;
    let value1 = parseInt(req.body.value1);
    let value2 = parseInt(req.body.value2);
    switch (req.body.operator) {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '/':
            result = value1 / value2;
            break;
        case '*':
            result = value1 * value2;
            break;
    }
    res.json({ result: 'Result = ' + result });
});

module.exports = router;