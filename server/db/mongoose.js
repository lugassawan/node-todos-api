var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//Using add on in heroku
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });
//Using mLab directly
mongoose.connect('mongodb://<irmajpegundan>:<irmaj12345>@ds131711.mlab.com:31711/todoapp' || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = { mongoose };