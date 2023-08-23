const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/movie-controller");

router.get("/");
router.post("/", MovieController.createMovie);
router.put("/");
router.delete("/");

module.exports = router;
