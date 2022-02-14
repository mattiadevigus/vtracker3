const router = require('express').Router();
const fun = require('./controllers/vtrackerfun');

router.get('/', fun.test);

module.exports = router;