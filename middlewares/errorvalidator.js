const ApiError = require('../helpers/apierror');
class ErrorMiddleware {
    /**
     * Middleware to try and catch all errors in my endpoints
     * @param {*} endpoint 
     * @returns 
     */
    constructor() {
        ErrorMiddleware.instance = null;
    }

    secureAsync(endpoint) {
        return async (req, res, next) => {
            try {
                await endpoint(req, res, next);
            } catch (error) {
               // console.log(error)
                next(error);
                //res.send(new ApiError(error.message, error.statusCode));
            }
        }
    }
    /**
     * Send the error to the client
     * @param {*} error 
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     */
    errorResponder(error, request, response, next) {
        response.status(500).json(new ApiError({ clientErrorMessage:"Internarl Server Error",debugErrorMessage: "" }));
        next(error);
    }
    /**
     * Record the error in the database
     * @param {*} error 
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     */
    //  errorLogger(error, request, response, next) {
    //     try {
    //         Database.error.create({
    //             data: {
    //                 time: new Date(),
    //                 url: request._parsedUrl.path,
    //                 path: request._parsedUrl.path,
    //                 request_body: JSON.stringify(request.body),
    //                 request_query: JSON.stringify(request.query),
    //                 request_params: JSON.stringify(request.params),
    //                 message: JSON.stringify(error.message),
    //                 stack: JSON.stringify(error),
    //             }
    //         }).then(r => {
    //             console.log("Error logged");
    //         })
    //         next(error);
    //     } catch (error) {
    //         console.log(error);
    //         console.log('Error in the loggin error')
    //     }
        
    // }
    static getErrorInstance(){
        if (!ErrorMiddleware.instance) {
            ErrorMiddleware.instance = new ErrorMiddleware(); 
        }
        return ErrorMiddleware.instance;
    }
}

module.exports = ErrorMiddleware;