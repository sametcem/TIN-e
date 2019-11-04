/* eslint-disable no-undef */
var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    let q = url.parse(req.url, true);
    let values = q.query;

    let ops = {
        "/add": (a, b) => a + b,
        "/sub": (a, b) => a - b,
        "/mul": (a, b) => a * b,
        "/div": (a, b) => a / b
    }

    let operator = q.pathname; // /add 
    let reg = /^\d+$/;

    if (!reg.test(values.value1) || !reg.test(values.value2)) {
        res.write('One of the values are not a number');
    } else if (!(operator in ops)) {
        res.write('Its not an operator, there is list of them : "/add, /sub, /div, /mul"');
    } else {
        let val1 = parseInt(values.value1);
        let val2 = parseInt(values.value2);

        res.write('<h1>Result = ' + ops[operator](val1, val2) + '</h1>' +
            '<style> h1 { text-align: center } </style>');
    }

    res.end();
}).listen(8003);