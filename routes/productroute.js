const express = require('express')
const { getproducts, getsingleproduct, updateproduct, deleteproduct, createproduct, errtesting } = require('../controllers/Productcontroller')
const router = express.Router()

router.get('/products',getproducts)
router.get('/product/:id',getsingleproduct)
router.get('/product/delete/:id',deleteproduct)
router.get('/product/update/:id',updateproduct)
router.post('/create', createproduct)

// creating error middleware route for testing

router.get('/err/3', errtesting)



module.exports = router