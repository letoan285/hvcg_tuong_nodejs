const router = require('express').Router();

const {
    getAll, 
    create, 
    getById,
    update,
    deleteProduct,
} = require('../controllers/product.controller');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteProduct);

module.exports = router;

// mongoDB, 
