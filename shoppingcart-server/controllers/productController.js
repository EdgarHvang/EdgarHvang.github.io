const { fectchAll } = require('../models/product');
const Product = require('../models/product');
// const Author = require('../models/author');


exports.setDefault = (req, res, next) => {

    // let author1 = new Author(11, "jk simons", "Oriely");
    // let author2 = new Author(12, "edgar", "trump");
    // let author3 = new Author(13, "mike", "Huang");
    let p1 = new Product(100, 'Harry Potter', '978-3-16-148410-0', '2022-01-02', "jk simons").save();
    let p2 = new Product(101, 'Jurassic Park', '978-3-16-148410-1', '2012-01-02', "edgar").save();
    let p3 = new Product(102, 'Game of Throne', '978-3-16-149410-5', '2001-01-02', "mike").save();

    res.status(200).json(Product.fectchAll())
}

exports.getProducts = (req, res, next) => {
    res.status(200).json(Product.fectchAll());
}

exports.getProductById = (req, res, next) => {
    res.status(200).json(Product.findById(req.params.productId))
}

exports.save = (req, res, next) => {
    const prod = req.body;
    console.log("add new product:", prod);
    const savedProd = new Product(null, prod.title, prod.ISBN, prod.publishDate, prod.author).save();
    res.status(201).json(savedProd);
}

exports.update = (req, res, next) => {
    const prod = req.body;
    console.log("update:", req.body);
    const updatedProd = new Product(prod.id, prod.title, prod.ISBN, prod.publishDate, prod.author).update();
    res.status(200).json(updatedProd).json(fectchAll);
}

exports.deleteById = (req, res, next) => {
    const prod = req.params;
    console.log("req.param:",req.params);
    console.log("req.body:",req.body);
    console.log("req.query:",req.query);
    Product.deleteById(prod.productId);
    res.status(200).json(fectchAll).end();
}

exports.getBookByAuthorName = (req,res,next)=>{
    const firstName = req.body.firstName;
    console.log("query:",req.query);
    console.log("body:",req.body);
    console.log("param:",req.params);
    res.status(200).json(Product.getBookByAuthor(firstName))

}

