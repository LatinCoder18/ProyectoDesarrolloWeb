const { Router } = require('express');
const router = Router();
const { find, findById, create, update, remove } = require('../controllers/aula');
const { validateId } = require('../middlewares/validations');
const { validateJWT } = require('../middlewares/validateJWT');

router.get('/', find)
router.get('/:id', [validateId, validateJWT], findById)
router.post('/', create);
router.put('/:id', validateId, update);
router.delete('/:id', validateId, remove)


module.exports = router;