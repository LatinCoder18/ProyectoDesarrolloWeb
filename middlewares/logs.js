
/**
 * Middleware function to log user IP and request type.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const logger = function (req, res, next) {
    console.log(`MiddleWare Global`, `User IP: ${req.ip} `, `Request Type: ${req.method}`);
    next();
}
module.exports = logger;