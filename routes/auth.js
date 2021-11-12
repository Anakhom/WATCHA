const express = require('express');
const router = express.Router();
const {
  checkUserAndCreateSession,
  createUserAndSession, 
  destroySession
} = require("../controllers/authController");

router
  .route('/register')
  .post(createUserAndSession);

router
  .route('/login')
  .post(checkUserAndCreateSession);

router
  .route('/signout')
  .get(destroySession)

module.exports = router;