const { Router } = require('express');
const { login } = require('../controllers/auth');
const ErrorValidator = require('../middlewares/errorvalidator').getErrorInstance();

const router = Router();

router.post('/login', ErrorValidator.secureAsync(login));

module.exports = router;