const fetch = require('node-fetch');
require('dotenv').config();

exports.renderSearchPage = async (req, res) => {
  res.render('watchas/search');
}

exports.searchMoviesByTitle = async (req, res, next) => {
  let input = req.body.searchInput;
  
  //fetching Movie Database API with user's input
  const response = await fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${input}&r=json&page=1`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPID_KEY
    }
  })

  const answer = await response.json();
  const movies = answer.Search;
  //getting only the ids from the serach result
  const moviesId = movies.map(el => el.imdbID);

  let moviesInfo = [];
  for (let i = 0; i < moviesId.length; i++) {
    //fetching to Movie Database API again for a more detailed description
    let detailedInfo = await fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&i=${moviesId[i]}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPID_KEY
      }
    })
    const data = await detailedInfo.json();
    moviesInfo.push(data);
  }

  res.render('watchas/search', { Found: true, moviesInfo });
}