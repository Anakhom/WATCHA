const fetch = require('node-fetch');
require('dotenv').config();

exports.renderTop30Movies = async (req, res) => {
  //fetching ImdB API for top 100 movies
  const response = await fetch("https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPID_KEY
    }
  })
  const data = await response.json();
  //modifying the array to contain only movies' ids
  let moviesId = data.map((el) => el.replace('/title/', '').replace('/', ''));
  
  let imagesArr = [];
  for (let i = 0; i < moviesId.length - 70; i++) {
    //fetching Movie Database API for the info on 30 most popular movies
    let movies = await fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&i=${moviesId[i]}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPID_KEY
      }
    })
    const data = await movies.json();
    imagesArr.push(data);
  }

  res.render('watchas/top30', { imagesArr });
}