const express = require('express');
const { signup, login, logout, getMe, updateDetails, updatePassword, uploadPhoto, forgotPassword, resetPassword } = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/uploadMiddleware');
const validate = require('../middleware/validate');
const { signupSchema, loginSchema } = require('../utils/validationSchemas');

const { authLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

router.post('/signup', authLimiter, validate(signupSchema), signup);
router.post('/login', authLimiter, validate(loginSchema), login);
router.get('/logout', logout);
router.get('/me', protect, getMe);
router.put('/updatedetails', protect, updateDetails);
router.put('/updatepassword', protect, updatePassword);
router.post('/uploadphoto', protect, upload.single('file'), uploadPhoto);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);

module.exports = router;
