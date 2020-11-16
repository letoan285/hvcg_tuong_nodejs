const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({message: 'Get categories successfully'})
});

module.exports = router;