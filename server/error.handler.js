'use strict'

module.exports = (req, resp, err, done) => {
    console.log(err.body)    
    // err.toJSON = () => {        
    //     return {            
    //         message: err.code
    //     }
    // }

    // switch(err.name) {
    //     case 'InvalidContentError' : 
    //         err.statusCode = 400
    //         break
    // }



    done()
}