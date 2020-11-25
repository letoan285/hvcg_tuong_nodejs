// const router = require('express').Router();

const router = require('express').Router();
const { getAll,getOne,createOne, register, login } = require('./user.controller');
const { checkToken } = require('../../auth/token_validation');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', checkToken, createOne);
router.post('/register', register);
router.post('/login', login);

module.exports = router;