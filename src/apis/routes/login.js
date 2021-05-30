const express = require('express');

const router = express.Router();
const { check } = require('express-validator');

const loginController = require('../../controller/loginController');

/**
 * @api {post} /login
 * @apiName signin
 * @apiGroup User
 */
router.post(
  '/signin',
  [
    check('email', 'email is required').not().isEmpty(),
    check('password', 'password is required').not().isEmpty(),
  ],
  loginController.signin
);

router.post('/signup', loginController.signup);

/**
 * @api {post} /phoneAuth
 * @apiName phoneAuth
 * @apiGroup Login
 */
router.post(
  '/phoneAuth',
  [check('phone', 'phone is required').not().isEmpty()],
  loginController.phoneAuth
);

/**
 * @api {post} /findPassword
 * @apiName findPassword
 * @apiGroup User
 */
router.post(
  '/findPassword',
  [check('email', 'email is required').not().isEmpty()],
  loginController.findPassword
);

/**
 * @api {post} /updatePassword
 * @apiName updatePassword
 * @apiGroup User
 */
router.post(
  '/updatePassword',
  [check('email', 'email is required').not().isEmpty()],
  [check('password1', 'password1 is required').not().isEmpty()],
  [check('password2', 'password2 is required').not().isEmpty()],
  loginController.updatePassword
);

module.exports = router;
