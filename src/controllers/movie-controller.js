const MovieService = require("../services/movie-service");
const HttpStatus = require("http-status");

exports.findAllMovies = async (req, res, next) => {
  const result = await MovieService.findAllMovies();
  if (result) {
    res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      message: "OK",
      result: result,
    });
  } else {
    res.status(HttpStatus.BAD_REQUEST).send({
      status: HttpStatus.BAD_REQUEST,
      message: "BAD_REQUEST",
      code: -888888,
      results: [],
      links: [
        {
          rel: "findAllMovie",
          method: "GET",
          href: "/movie",
        },
      ],
    });
  }
};

exports.findMovieByMovieNo = async (req, res, next) => {
  console.log(req.params.movie_no);
  const result = await MovieService.findMovieByMovieNo(req.params.movie_no);
  if (result) {
    res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      message: "OK",
      result: result,
    });
  } else {
    res.status(HttpStatus.BAD_REQUEST).send({
      status: HttpStatus.BAD_REQUEST,
      message: "BAD_REQUEST",
      code: -888888,
      results: [],
      links: [
        {
          rel: "findMovieByMovieNo",
          method: "GET",
          href: `/movie/${req.params.movie_no}`,
        },
      ],
    });
  }
};

exports.createMovie = async (req, res, next) => {
  console.log(req.body.movieName);
  const result = await MovieService.createMovie(req.body.movieName);
  if (result) {
    res.status(HttpStatus.CREATED).send({
      status: HttpStatus.CREATED,
      message: "CREATED",
      result: result,
      contentLocation: `/movie/${result[0].movie_no}`,
    });
  } else {
    res.status(HttpStatus.BAD_REQUEST).send({
      status: HttpStatus.BAD_REQUEST,
      message: "BAD_REQUEST",
      code: -888888,
      results: [],
      links: [
        {
          rel: "createMovie",
          method: "POST",
          href: "/movie",
        },
      ],
    });
  }
};

exports.updateMovie = async (req, res, next) => {
  const result = await MovieService.updateMovie(
    req.params.movie_no,
    req.body.movieName
  );
  if (result) {
    res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      message: "OK",
      result: result,
    });
  } else {
    res.status(HttpStatus.BAD_REQUEST).send({
      status: HttpStatus.BAD_REQUEST,
      message: "BAD_REQUEST",
      code: -888888,
      results: [],
      links: [
        {
          rel: "updateMovie",
          method: "PUT",
          href: `/movie/${req.params.movie_no}`,
        },
      ],
    });
  }
};
