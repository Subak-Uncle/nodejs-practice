const MovieQuery = require("../database/movie-query");

exports.findAllMovies = (connection) => {
  return new Promise((resolve, reject) => {
    connection.query(MovieQuery.findAllMovies(), [], (err, result) => {
      if (err) {
        reject(err);
      }
      console.log(result);
      resolve(result);
    });
  });
};

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
      [movie.original_title, movie.release_date, movie.id],
      (err, result) => {
        if (err) {
          reject(err);
        }
        console.log(result);
        resolve(result);
      }
    );
  });
};

exports.updateMovie = (connection, movie_no, movieName) => {
  return new Promise((resolve, reject) => {
    connection.query(
      MovieQuery.updateMovie(),
      [movie_no, movieName],
      (err, result) => {
        if (err) {
          reject(err);
        }
        console.log(result);
        resolve(result);
      }
    );
  });
};
