const controller = require("../controllers/controller");
const router = require("express").Router();



router.get("/", controller.getHome);

router.get("/servers", controller.getAllServers);

router.post("/login", controller.login);

router.get("*", controller.all);

module.exports = router;