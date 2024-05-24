module.exports = {
    /**
     * Valida que el id proporcionado sea un número.
     * @async
     * @function validateId
     * @param {Object} req - Objeto de solicitud.
     * @param {Object} res - Objeto de respuesta.
     * @param {Function} next - Función de middleware.
     * @returns {Object} - Objeto JSON con un mensaje de error si el id no es un número.
     */
    async validateId(req, res, next) {
        const { id } = req.params;
        if (!id || isNaN(id)) {
            return res.status(400).json({
                msg: 'Id no proporcionado o no es un número'
            });
        }
        next();
    }
};