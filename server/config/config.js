var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
    var config = require('./config.json');
    var envConfig = config[env];

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });
}

//process.env.MONGODB_URI = 'mongodb://node-api:api12345@ds131711.mlab.com:31711/todoapp';