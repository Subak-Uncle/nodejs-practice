const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/movie-controller");

router.get("/", MovieController.findAllMovies);
router.get("/:movie_no", MovieController.findMovieByMovieNo);
router.post("/", MovieController.createMovie);
router.put("/:movie_no", MovieController.updateMovie);
router.delete("/:movie_no");

module.exports = router;
