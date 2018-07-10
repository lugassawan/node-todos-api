var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//Using add on in heroku
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });
//Using mLab directly
const MONGO_URL = 'mongodb://node-api:api12345@ds131711.mlab.com:31711/todoapp';
//mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });
mongoose.connect(MONGO_URL || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err) => {
    if (err) {
        return console.log(err);
    }

    return console.log('Connected to mLab directly');
});

module.exports = { mongoose };