const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const shortId = require('shortid');

const app = express();
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/shopping_cart-db', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// first parameter is colection name , seceond parameter is object containing columns
const Product = mongoose.model('product', new mongoose.Schema({
_id: {type: String, default: shortId.generate},
image: String,
title: String,
description: String,
price: Number,
availableSize: [String]
}));

app.get('/api/products', async (req,res) => {
    const products = await Product.find({});
    res.send(products)
});

app.post('/api/products', async(req,res) => {
    const newProduct = new Product(req.body)
    const savedProduct = await newProduct.save();
    res.send(savedProduct)
})

app.delete('/api/product/:id',async(req,res) => {
    const deleteproduct = await Product.findByIdAndDelete(req.params.id)
    req.send(deleteproduct)
})

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log('server at 5000'))