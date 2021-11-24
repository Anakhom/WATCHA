const express = require('express');
const router = express.Router();
const { renderTop30Movies } = require("../controllers/top30Controller");

router
  .route('/')
  .get(renderTop30Movies);

module.exports = router;