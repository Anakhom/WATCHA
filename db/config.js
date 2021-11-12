require('dotenv').config();

const dbUrl = process.env.DB_URL_DEV;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

module.exports = { dbUrl, options };

