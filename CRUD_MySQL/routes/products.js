var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '-----',
    database: 'india'
});

connection.connect(function(err){
    if (err) throw err;
    console.log('Connected dB!')
})


router.get('/', function (req, res, next) {
    var query = 'SELECT * FROM PRODUCTS';
    connection.query(query,function(err,rows,fields){
        if(err) throw err;

        //res.json(rows);
    res.render('products', { title: 'Products', products: rows });
    });
});

router.get('/create-form', function (req, res, next) {
    res.render('createform', { title: 'Create Product' });
});


router.post('/create', function (req, res, next) {
    var product_name = req.body.product_name;
    var sku = req.body.sku;
    var price = req.body.price;

    var sql = `INSERT INTO products (product_name, sku, price, is_active, created_at) VALUES ("${product_name}", "${sku}","${price}",1, NOW())`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log('record inserted');
        res.redirect('/');
    });
});

/*update product*/
router.get('/edit-form/:id', function (req, res, next) {
    var id = req.params.id;
    var sql = `SELECT * FROM products WHERE id=${id}`;
    connection.query(sql, function (err, rows, fields) {
        res.render('editform', { title: 'Edit Product', product: rows[0] });
    });
});

router.post('/edit/:id', function (req, res, next) {
    var product_name = req.body.product_name;
    var sku = req.body.sku;
    var price = req.body.price;
    var id = req.params.id;
    var sql = `UPDATE products SET product_name="${product_name}", sku="${sku}", price="${price}" WHERE id=${id}`;

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log('record updated!');
        res.redirect('/');
    });
});

/*delete product*/
router.get('/delete/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    var sql = `DELETE FROM products WHERE id=${id}`;

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log('record deleted!');
        res.redirect('/');
    });
});



module.exports = router;