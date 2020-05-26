'use strict'

module.exports = (req, resp, err, done) => {

    err.toJSON = () => {
        return {
            message: err.name
        }
    }

    done()
}