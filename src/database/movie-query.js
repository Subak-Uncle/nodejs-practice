exports.findMovieByMovieNo = () => {
  return `
    SELECT movie_no,
           movie_name,
           movie_date
      FROM TBL_MOVIE
      WHERE movie_no =?
    `;
};

exports.createMovie = () => {
  return `
        INSERT
          INTO TBL_MOVIE
          (movie_name, movie_date)
        VALUES
        (?, ?)
    `;
};
