const router = require('express').Router();
const { getProducts, getOne, createOne, update, deleteOne } = require('./product.controller');

router.get('/', getProducts); // finished

router.get('/:id', getOne);

router.post('/', createOne);

router.put('/:id', update);

router.delete('/:id', deleteOne);

module.exports = router;