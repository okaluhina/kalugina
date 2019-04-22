const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../config/passport');
const authController = require('../controllers/auth');

router.route('/login')
  .post(
    passport.authenticate('local', { session: false }),
    authController.login
    );

router.route('/logout')
  .post(authController.logout);

router.route('/google')
  .get(passport.authenticate('google', { scope: ['profile', 'email'] }, { session: false }));

router.route('/google/redirect')
  .get(
    passport.authenticate('google', { session: false }),
    authController.redirect
  );

router.route('/secret')
  .post(
    passport.authenticate('jwt', { session: false }),
    authController.secret
    );

module.exports = router;