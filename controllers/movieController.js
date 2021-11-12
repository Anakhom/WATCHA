const fetch = require('node-fetch');
require('dotenv').config();

exports.renderMovie = async (req, res) => {
  let movieId = req.params.movieId;
  
  let response = await fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?plot=full&r=json&i=${movieId}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPID_KEY
      }
    })
    const watcha = await response.json();
    console.log(watcha);

    let genres = watcha.Genre.split(',').map(genre => ({ genre }));
    let actors = watcha.Actors.split(',').map(actor => ({ actor }));

  res.render('watchas/singleWatcha', { watcha, genres, actors });
}