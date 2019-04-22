const express = require('express');
const router = require('express-promise-router')();
const { validateBody, schemas } = require('../middleware/validation');
const UsersController = require('../controllers/users');
const passport = require('passport');
const passportConf = require('../config/passport');
const permit = require('../middleware/permission');
const Role = require("../enums/roles.enum");

const passportJWT = passport.authenticate('jwt', { session: false });

router.route('/')
  .get(passportJWT, permit(Role.Admin), UsersController.get);

router.route('/me')
  .get(passportJWT, permit(Role.User, Role.Company), UsersController.get);

router.route('/:id')
  .get(UsersController.getById)
  .put(UsersController.put)
  .delete(UsersController.delete);
    

module.exports = router;
