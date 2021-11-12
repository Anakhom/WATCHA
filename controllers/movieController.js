const fetch = require('node-fetch');

exports.renderMovie = async (req, res) => {
  let movieId = req.params.movieId;
  
  let response = await fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?plot=full&r=json&i=${movieId}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": "bb1aa16154msh80fe6ed1267bea0p13e516jsn12054468d781"
      }
    })
    const watcha = await response.json();
    console.log(watcha);

    let genres = watcha.Genre.split(',').map(genre => ({ genre }));
    let actors = watcha.Actors.split(',').map(actor => ({ actor }));

  res.render('watchas/singleWatcha', { watcha, genres, actors });
}