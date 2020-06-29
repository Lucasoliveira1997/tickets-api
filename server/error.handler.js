'use strict'

module.exports = (req, resp, err, done) => {
    console.log(err.jse_cause)
    err.toJSON = () => {                        
        return {  
            message: err.jse_cause.errmsg
        }
    }

    switch(err.jse_cause.name) {
        case 'MongoError' : 
            if(err.jse_cause.code === 11000) {
                err.statusCode = 400
            }
            break
        
        // case 'ValidationError' {

        // }
    }



    done()
}