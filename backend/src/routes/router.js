const controller = require("../controllers/controller");
const router = require("express").Router();

router.post("/login", controller.login);

router.get("*", controller.all);

module.exports = router;