var mongoose = require('mongoose');

var config = require('./config').get(process.env.NODE_ENV);

mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });
mongoose.connect(config.database, { useNewUrlParser: true });

module.exports = { mongoose };