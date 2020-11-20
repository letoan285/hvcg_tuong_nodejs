const router = require('express').Router();
const { getProducts, getOne, create, update, deleteOne } = require('./product.controller');

router.get('/', getProducts);

router.get('/:id', getOne);

router.post('/', create);

router.put('/:id', update);

router.delete('/:id', deleteOne);

module.exports = router;