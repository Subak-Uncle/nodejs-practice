const MovieQuery = require("../database/movie-query");

exports.findMovieByMovieNo = (connection, movieNo) => {
  return new Promise((resolve, reject) => {
    connection.query(
      MovieQuery.findMovieByMovieNo(movieNo),
      [movieNo],
      (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      }
    );
  });
};

exports.createMovie = (connection, movie) => {
  return new Promise((resolve, reject) => {
    connection.query(
      MovieQuery.createMovie(),
      [movie.original_title, movie.release_date],
      (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        console.log(result);
        resolve(result);
      }
    );
  });
};
