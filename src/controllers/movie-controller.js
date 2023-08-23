const MovieService = require("../services/movie-service");
const HttpStatus = require("http-status");
const fetch = require("node-fetch");

exports.createMovie = async (req, res) => {
  console.log(req.body.movieName);
  const result = await MovieService.createMovie(req.body.movieName);
  if (result) {
    res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      message: "CREATED",
      result: {
        movieNo: result.movie_no,
        movieName: result.movie_name,
      },
      contentLocation: `/movie/${result.movie_no}`,
    });
  } else {
    res.status(HttpStatus.BAD_REQUEST).send({
      status: HttpStatus.BAD_REQUEST,
      message: "BAD_REQUEST",
      code: -888888,
    });
  }
};
