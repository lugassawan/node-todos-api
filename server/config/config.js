var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGO_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGO_URI = 'mongodb://localhost:27017/TodoAppTest';
} else {
    process.env.MONGO_URI = 'mongodb://node-api:api12345@ds131711.mlab.com:31711/todoapp';
}