exports.findAllMovies = () => {
  return `
    SELECT movie_no,
           movie_name,
           movie_date,
           movie_id
      FROM TBL_MOVIE           
    `;
};

exports.findMovieByMovieNo = () => {
  return `
    SELECT movie_no,
           movie_name,
           movie_date,
           movie_id
      FROM TBL_MOVIE
      WHERE movie_no =?
    `;
};

exports.createMovie = () => {
  return `
        INSERT
          INTO TBL_MOVIE
          (movie_name, movie_date, movie_id)
        VALUES
        (?, ?, ?)
    `;
};

exports.updateMovie = () => {
  return `
        UPDATE TBL_MOVIE
           SET movie_name =?,
               movie_date =?,
               movie_id =?
         WHERE movie_no =?
            `;
};
