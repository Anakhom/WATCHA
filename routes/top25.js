const express = require('express');
const router = express.Router();
const { renderTop25Movies } = require("../controllers/top25Controller");

router
  .route('/')
  .get(renderTop25Movies);

module.exports = router;