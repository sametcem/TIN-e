/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const getOperator = (cmd) => {
    switch (cmd) {
        case 'add':
            return (x, y) => x + y;
        case 'sub':
            return (x, y) => x - y;
        case 'mul':
            return (x, y) => x * y;
        case 'div':
            return (x, y) => x / y;
        default:
            return 'Error';
    }
};

router.get('/', (req, res, next) => {
    res.render('index', { title: '  Assignment 9 Calculator with AJAX' });
});

router.post('/', (req, res) => {
    const result = getOperator(req.body.operator)(Number(req.body.left), Number(req.body.right));
    console.log(req.body);
    console.log("Result:" + result);
    const response = { result };
    res.send(JSON.stringify(response));
});

module.exports = router;