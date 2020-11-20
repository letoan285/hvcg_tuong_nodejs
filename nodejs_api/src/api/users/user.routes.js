// const router = require('express').Router();

const router = require('express').Router();
const { getAll } = require('./user.controller');

router.get('/', getAll);

module.exports = router;