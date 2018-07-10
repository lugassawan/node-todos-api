var config = {
    production: {
        database: 'mongodb://node-api:api12345@ds131711.mlab.com:31711/todoapp'
    },
    default: {
        database: 'mongodb://localhost:27017/TodoApp'
    }

}

exports.get = function get(env) {
    return config[env] || config.default;
}