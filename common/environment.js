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
        publicKey: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9
                    .eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1OTQzMTE1MDEsImV4cCI6MTYyNTg0NzUwMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0
                    .xEKl5NWtS1kiKtPg9JyqkSvx9Fxl1ltdEiN79oEWN1U`
    }
}

module.exports = environment