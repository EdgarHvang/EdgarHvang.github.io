const { fectchAll } = require('../models/product');
const Product = require('../models/product');

exports.setDefault = (req,res,next)=>{

        let p1 = new Product(100,'Harry Potter','978-3-16-148410-0','2022-01-02',"JK Rolin").save();
        let p2 = new Product(101,'Jurassic Park','978-3-16-148410-1','2012-01-02',"John ***").save();
        let p3 = new Product(102,'Game of Throne','978-3-16-149410-5','2001-01-02',"David Benioff").save();
    
    res.status(200).json(Product.fectchAll())
}

exports.getProducts = (req,res,next)=>{
    res.status(200).json(Product.fectchAll());
}

exports.getProductById = (req,res,next)=>{
    res.status(200).json(Product.findById(req.params.productId))
}

exports.save = (req,res,next)=>{
    const prod = req.body;
    console.log("add new product:",prod);
    const savedProd = new Product(null,prod.title,prod.ISBN,prod.publishDate,prod.author).save();
    res.status(201).json(savedProd);
}

exports.update = (req,res,next)=>{
    const prod = req.body;
    console.log("update:",req.body);
    const updatedProd = new Product(prod.id,prod.title,prod.ISBN,prod.publishDate,prod.author).update();
    res.status(200).json(updatedProd).json(fectchAll);
}

exports.deleteById = (req,res,next)=>{
    const prod = req.body;
    console.log(req.body);
    Product.deleteById(prod.productId);
    res.status(200).json(fectchAll).end();
}

