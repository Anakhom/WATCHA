const express = require('express');
const router = express.Router();
const { renderMovie } = require("../controllers/movieController");

router
  .route('/:movieId')
  .get(renderMovie);

module.exports = router;