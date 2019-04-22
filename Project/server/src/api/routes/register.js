const express = require('express');
const router = require('express-promise-router')();
const { validateBody, schemas } = require('../middleware/validation');
const registerController = require('../controllers/register');

router.route('/client')
  .post(
    validateBody(schemas.registerClientSchema),
    registerController.client
    );

router.route('/company')
  .post(
    validateBody(schemas.registerCompanySchema),
    registerController.company
    );

router.route('/client/verify')
  .put(registerController.verifyClient);

router.route('/company/verify')
  .put(registerController.verifyCompany);

module.exports = router;
