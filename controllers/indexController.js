const fetch = require('node-fetch');
require('dotenv').config();

exports.renderMainPage = async (req, res) => {
  const randomMovies = await fetch("https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPID_KEY
    }
  })
  const data = await randomMovies.json();
  let moviesId = data.map((el) => el.replace('/title/', '').replace('/', ''));
  
  let imagesArr = [];
  for (let i = 0; i < moviesId.length - 96; i++) {
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

