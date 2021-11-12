const bcrypt = require('bcrypt');
const User = require('../db/models/user');

//function for failing the authorization
function failAuth(res) {
  return res.status(401).end();
}

//assigning only login and id to the session
function serializeUser(user) {
  return {
    id: user._id,
    name: user.login,
  };
}

exports.createUserAndSession = async (req, res, next) => {
  const { login, password, email } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new User({ 
      login: login, 
      password: hashedPassword, 
      email: email
    });
    await newUser.save();
    req.session.user = serializeUser(newUser); 
  } catch (err) {
    console.log(err)
  }
  //sending status 200 back to the browser
  res.status(200).end();
};

exports.checkUserAndCreateSession = async (req, res, next) => {
  const { login, password } = req.body;

  try {
    const user = await User.findOne({ login: login }).exec();

    await bcrypt.compare(password, user.password);
    req.session.user = serializeUser(user);
    res.status(200).end();
  } catch (err) {
    console.log(err);
  }
}

exports.destroySession = async (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.clearCookie('sid');
    res.redirect('/');
  });
}
