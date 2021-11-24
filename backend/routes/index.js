let express = require('express');
let router = express.Router();
const { renderMainPage } = require('../controllers/indexController');

router
  .route('/')
  .get(renderMainPage);

module.exports = router;
