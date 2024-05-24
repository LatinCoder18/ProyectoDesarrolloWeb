/**
 * Controlador para la gestión de aulas.
 * @controller AulaController
 */

let aulas = [
    {
        asignatura: 'Info',
        capacidad: 30,
        identificador: 1
    },
    {
        asignatura: 'Info',
        capacidad: 30,
        identificador: 2
    },
    {
        asignatura: 'Info',
        capacidad: 30,
        identificador: 3
    },
    {
        asignatura: 'Info',
        capacidad: 30,
        identificador: 4
    }
]

/**
 * Obtiene todas las aulas.
 * @async
 * @function find
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} res - Objeto de respuesta.
 * @returns {Object} - Objeto JSON con todas las aulas.
 */
module.exports = {
    async find(req, res) {
        return res.json(aulas)
    },

    /**
     * Obtiene un aula por su identificador.
     * @async
     * @function findById
     * @param {Object} req - Objeto de solicitud.
     * @param {Object} res - Objeto de respuesta.
     * @returns {Object} - Objeto JSON con el aula encontrada.
     * @throws {Object} - Objeto JSON con un mensaje de error si el aula no se encuentra.
     */
    async findById(req, res) {
        const identificador = req.params.id;
        const aula = aulas.find((element) => {
            return element.identificador == identificador;
        })
        if (!aula) {
            return res.status(404).json({
                msg: 'Aula no encontrada'
            });
        }
        return res.json(aula);
    },

    /**
     * Crea un nuevo aula.
     * @async
     * @function create
     * @param {Object} req - Objeto de solicitud.
     * @param {Object} res - Objeto de respuesta.
     * @returns {Object} - Objeto JSON con el aula creada.
     */
    async create(req, res) {
        const { asignatura, capacidad } = req.body;
        const ultima = aulas[aulas.length - 1];
        aulas.push(
            {
                asignatura, capacidad, identificador: (ultima.identificador + 1)
            }
        )
        return res.json(aulas[aulas.length - 1]);
    },
    /**
     * Actualiza un aula.
     * @async
     * @function update
     * @param {Object} req - Objeto de solicitud.
     * @param {Object} res - Objeto de respuesta.
     * @returns {Object} - Objeto JSON con el aula actualizada.
     * @throws {Object} - Objeto JSON con un mensaje de error si el aula no se encuentra.
     */
    async update(req, res) {
        const identificador = req.params.id;
        const { asignatura, capacidad } = req.body;
        const aula = aulas.find((element) => {
            return element.identificador == identificador;
        })
        if (!aula) {
            return res.status(404).json({
                msg: 'Aula no encontrada'
            });
        }
        aula.asignatura = asignatura;
        aula.capacidad = capacidad;
        return res.json(aula);
    },
    /**
     * Elimina un aula.
     * @async
     * @function remove
     * @param {Object} req - Objeto de solicitud.
     * @param {Object} res - Objeto de respuesta.
     * @returns {Object} - Objeto JSON con un mensaje de éxito.
     * @throws {Object} - Objeto JSON con un mensaje de error si el aula no se encuentra.
     */
    async remove(req, res) {
        const identificador = req.params.id;
        const aula = aulas.find((element) => {
            return element.identificador == identificador;
        })
        if (!aula) {
            return res.status(404).json({
                msg: 'Aula no encontrada'
            });
        }
        aulas = aulas.filter((element) => {
            return element.identificador != identificador;
        })
        return res.json({
            msg: 'Aula eliminada'
        });
    }
}