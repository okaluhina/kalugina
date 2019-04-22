const express = require('express');
const router = require('express-promise-router')();
const { validateBody, schemas } = require('../middleware/validation');
const CompaniesController = require('../controllers/companies');

router.route('/')
  .get(CompaniesController.get);

router.route('/:id')
  .get(CompaniesController.getById)
  .put(CompaniesController.put);
  

module.exports = router;
