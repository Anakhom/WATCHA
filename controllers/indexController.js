const fetch = require('node-fetch');

exports.renderMainPage = async (req, res) => {
  const randomMovies = await fetch("https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "bb1aa16154msh80fe6ed1267bea0p13e516jsn12054468d781"
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
        "x-rapidapi-key": "bb1aa16154msh80fe6ed1267bea0p13e516jsn12054468d781"
      }
    })
    const data = await movies.json();
    imagesArr.push(data);
  }
  res.render('index', { Main: true, imagesArr });
}

