const { signup, login,id,registerForEvent,remark } = require('../Controllers/AuthControllers');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
router.post('/id', id);
router.post('/saveEvent', registerForEvent);
router.post('/remark', remark);

module.exports = router;