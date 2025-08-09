const mongoose = require('mongoose');
const {MONGO_URI} = require('../../env');

module.exports = () => {
  mongoose.connect(MONGO_URI, { useNewUrlParser: false, useUnifiedTopology: false })
    .then(() => console.log('DB connected'))
    .catch(err => console.error('DB connection error:', err));
};
