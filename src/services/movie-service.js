const getConnection = require("../database/connection");
const MovieRepository = require("../repositories/movie-repo");

const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzI5NTYyNDcwNDIxZTE1MzU3N2MxOWVlZjgyN2IxMCIsInN1YiI6IjY0ZDhhZjcyMDAxYmJkMDEzYWVlNGRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BlkMvNM9t1s9RRbKod_MVXBAvVlaun1k9gSqw74eTGY";

exports.createMovie = (movieName) => {
  return new Promise(async (resolve, reject) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=ko-KR&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `${apiKey}`,
      },
    };

    await fetch(url, options)
      .then((res) => res.json())
      .then(async (json) => {
        console.log(json.results[0]);

        const connection = getConnection();

        const results = await MovieRepository.createMovie(
          connection,
          json.results[0]
        );

        const result = await MovieRepository.findMovieByMovieNo(
          connection,
          results.insertId
        );
        console.log("find result : ", result);

        connection.end();

        resolve(result);
      })
      .catch((err) => reject(err));
  });
};
