const fetch = require('node-fetch');
require('dotenv').config();

exports.renderMainPage = async (req, res) => {
  //fetching imdB API for top 100 movies
  const randomMovies = await fetch("https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPID_KEY
    }
  })
  const data = await randomMovies.json();
  //modifying the array to contain only movies' ids
  let moviesId = data.map((el) => el.replace('/title/', '').replace('/', ''));
  
  let imagesArr = [];
  for (let i = 0; i < moviesId.length - 96; i++) {
    //fetching Movie Database API for the info on 4 current most popular movies
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
  res.render('index', { Main: true, imagesArr });
}

