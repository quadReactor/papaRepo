const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/instagram';
mongoose.connect(mongoUri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to the database!!!');
});

module.exports = db;
