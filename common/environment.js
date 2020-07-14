const environment = {
    server: {
        port: process.env.PORT || 4000
    },

    db: {
        url: process.env.MONGO_DB || 'mongodb://localhost:27017/tickets-api',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },

    security: {
        publicKey: '434735bf4efe7975dc81edac37b0bbc8'
    }
}

module.exports = environment