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
    }
}

module.exports = environment