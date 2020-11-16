const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({message: 'Get Categories scessfully'})
});

module.exports = router;