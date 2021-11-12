const express = require('express');
const router = express.Router();
const { searchMoviesByTitle, 
  renderSearchPage, 
  // renderSearchedMovies 
} = require("../controllers/searchController");

router
  .route('/byTitle')
  .get(renderSearchPage)
  .post(searchMoviesByTitle)
  // .get(renderSearchedMovies)

// router
//   .route('/byTitle/search')

module.exports = router;