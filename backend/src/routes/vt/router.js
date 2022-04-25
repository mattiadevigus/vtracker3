// routes base

const controller = require('./../../controllers/vt/controller');
const router = require('express').Router();

router.get("*", controller.all);

module.exports = router;