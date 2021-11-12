const User = require('../db/models/user');
const fetch = require('node-fetch');

exports.redirectProfile = async (req, res) => {
  let userId = req.params.userId;
  res.redirect(`/profile/${userId}/watched`);
}

// add/remove movies to/from DB functions
exports.addWatchedMovie = async (req, res) => {
  let userId = req.params.userId;
  let watchedMovieId = req.body.movieId;

  try {
    const user = await User.findById(userId).exec();

    //checking if the movie title was already 
    //added to the watched list
    if (!user.watched.includes(watchedMovieId)) {
      user.watched.push(watchedMovieId);  
      await user.save();
    } else {
      res.status(400).end();
    }

    //checking if the movie title is in 
    //the wanted list and removing it
    if (user.want.includes(watchedMovieId)){
      console.log('you wanted thiiiissssss')
      const index = user.want.indexOf(watchedMovieId);
      user.want.splice(index, 1);
      await user.save();
    }
  } catch (err) {
    console.log(err);
  }
  res.end();
}

exports.addWantedMovie = async (req, res) => {
  let userId = req.params.userId;
  let wantedMovieId = req.body.movieId;

  try {
    const user = await User.findById(userId).exec();
    
    //checking if the movie title was already 
    //added to the want list
    if (!user.want.includes(wantedMovieId)){
      user.want.push(wantedMovieId);  
      await user.save();
    } else {
      res.status(400).end();
    }

    //checking if the movie title is in 
    //the watched list and removing it
    if (user.watched.includes(wantedMovieId)){
      console.log('you watched thiiiissssss')
      const index = user.watched.indexOf(wantedMovieId);
      user.watched.splice(index, 1);
      await user.save();
    }
  } catch (err) {
    console.log(err);
  }
  res.end();
}

//render movies functions
exports.renderWatchedProfile = async (req, res) => {
  let userId = req.params.userId;

  try {
    const user = await User.findById(userId).exec();
    let watchedMoviesCount = user.watched.length;
    let wantedMoviesCount = user.want.length;

    let watchedMovies = [];

    //fetching movie database API
    for (let i = 0; i < watchedMoviesCount; i++) {
      let movies = await fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&i=${user.watched[i]}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": "bb1aa16154msh80fe6ed1267bea0p13e516jsn12054468d781"
      }
    })
      const data = await movies.json();
      watchedMovies.push(data);
    }
    res.render('profile/profile', { user, Watched: true, watchedMoviesCount, wantedMoviesCount, watchedMovies });
  } catch (err) {
    console.log(err);
  }
};

exports.renderWantProfile = async (req, res) => {
  let userId = req.params.userId;

  try {
    const user = await User.findById(userId).exec();
    let watchedMoviesCount = user.watched.length;
    let wantedMoviesCount = user.want.length;

    let wantedMovies = [];

    //fetching movie database API
    for (let i = 0; i < wantedMoviesCount; i++) {
      let movies = await fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&i=${user.want[i]}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": "bb1aa16154msh80fe6ed1267bea0p13e516jsn12054468d781"
      }
    })
      const data = await movies.json();
      wantedMovies.push(data);
    }
    res.render('profile/profile', { user, Want: true, watchedMoviesCount, wantedMoviesCount, wantedMovies });
  } catch (err) {
    console.log(err);
  }
};

//edit profile function
exports.editProfile = async (req, res) => {
  let userId = req.params.userId;

  try {
    const user = await User.findById(userId).exec();
    
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    await user.save();

    res.json(user);
  } catch (err) {
    console.log(err);
  }
};