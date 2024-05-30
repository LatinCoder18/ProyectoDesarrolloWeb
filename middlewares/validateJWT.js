const jwt = require('jsonwebtoken');
const ApiError = require('../helpers/Apierror');
module.exports = {
    validateJWT: async (req, res, next) => {
        const token = req.header('Authorization');
        if (!token) {
            return res.status(401).json(
                new ApiError({ clientErrorMessage: 'Lang.SESSION_INVALID', debugErrorMessage: "noTokenError" })
            );
        }
        try {
            const { uid } = jwt.verify(token, process.env.SECRET);
            console.log(uid)
            next();
        } catch (error) {
            res.status(401).json(new ApiError({ clientErrorMessage: 'Lang.SESSION_INVALID', debugErrorMessage: error }));
        }
    }
}