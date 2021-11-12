const fetch = require('node-fetch');

exports.renderSearchPage = async (req, res) => {
  res.render('watchas/search');
}

exports.searchMoviesByTitle = async (req, res, next) => {
  let input = req.body.searchInput;
  
  const response = await fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${input}&r=json&page=1`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
      "x-rapidapi-key": "bb1aa16154msh80fe6ed1267bea0p13e516jsn12054468d781"
    }
  })

  const answer = await response.json();
  const movies = answer.Search;

  const moviesId = movies.map(el => el.imdbID);

  let moviesInfo = [];
  for (let i = 0; i < moviesId.length; i++) {
    let detailedInfo = await fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&i=${moviesId[i]}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": "bb1aa16154msh80fe6ed1267bea0p13e516jsn12054468d781"
      }
    })
    const data = await detailedInfo.json();
    moviesInfo.push(data);
  }

  res.render('watchas/search', { Found: true, moviesInfo });
}