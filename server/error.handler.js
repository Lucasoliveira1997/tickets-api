'use strict'

module.exports = (req, resp, err, done) => {
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
        
        case 'ValidationError' :
            let messages = []
            for(let error in err.jse_cause.errors) {
                messages.push({message: err.jse_cause.errors[error].message})           
            }

            err.toJSON = () => ({                        
                errors: messages
            })

        }
    done()
}