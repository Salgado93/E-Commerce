var express = require('express');
var router = express.Router();
var Cart = require("../models/cart");
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
        Product.find(function(err,docs) {
            var productChunks = [];
            var chunkSize = 3;
            for (var i = 0 ; i < docs.length ; i += chunkSize){
                productChunks.push(docs.slice(i, i + chunkSize));
            }
            res.render('shop/index', { title: 'E-shoes', products: productChunks }); 
        });
    });

router.get('/add-to-cart/:id', function(req,res,next){
    var productId = req.params.id;

    Product.findById(productId, function (err,product){
        if(err){
            return res.redirect('/');
        }
        cart.add(product, product.id);
        res.redirect('/');
    });
}); 
module.exports = router;
