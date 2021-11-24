const express = require('express');
const router = express.Router();
const {
  redirectProfile,
  addWatchedMovie,
  renderWatchedProfile,
  addWantedMovie,
  renderWantProfile,
  editProfile
} = require('../controllers/profileController');

router
  .route('/:userId')
  .get(redirectProfile);

router
  .route('/:userId/watched')
  .post(addWatchedMovie)
  .get(renderWatchedProfile);

router
  .route('/:userId/want')
  .post(addWantedMovie)
  .get(renderWantProfile);

router
  .route('/:userId/edit')
  .put(editProfile);

module.exports = router;
