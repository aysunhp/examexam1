const router = require("express").Router();

const userControllers = require("./../controllers/userControllers");

router.get("/api", userControllers.getAllData);
router.delete("/api/:id", userControllers.deleteData);
router.post("/api", userControllers.postData);

module.exports = router;
