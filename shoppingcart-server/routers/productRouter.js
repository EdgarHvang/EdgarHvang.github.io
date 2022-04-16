const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.post('/defaultData',productController.setDefault) //set some default data

router.get('/',productController.getProducts); //fetch all products 

router.get('/:productId',productController.getProductById) // search product by productid

router.post('/',productController.save) //add new product

router.put('/',productController.update) //update product info,search productid first

router.delete('/:productId',productController.deleteById) //delete product by productId id is number but in server it's treat as string

router.get('/booksAuthorName',productController.getBookByAuthorName); //return the book by the author

module.exports = router;