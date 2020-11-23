// const router = require('express').Router();

const router = require('express').Router();
const { getAll,getOne,createOne } = require('./user.controller');
const { checkToken } = require('../../auth/token_validation');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', checkToken, createOne);

module.exports = router;