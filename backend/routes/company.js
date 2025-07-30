const express = require('express');
const router = express.Router();
const {
  createCompany,
  getCompanies,
  updateCompany,
  deleteCompany
} = require('../controllers/companyController');
const verify = require('../middleware/authMiddleware');

router.post('/', verify, createCompany);
router.get('/', verify, getCompanies);
router.put('/:id', verify, updateCompany);
router.delete('/:id', verify, deleteCompany);

module.exports = router;
