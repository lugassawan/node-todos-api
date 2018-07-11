var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

module.exports = { mongoose };