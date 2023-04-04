const controller = require("../controllers/controller");
const router = require("express").Router();

router.get("*", controller.all);

router.get("/", controller.getHome);

router.post("/login", controller.login);

module.exports = router;