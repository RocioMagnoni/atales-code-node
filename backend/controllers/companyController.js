const Company = require('../models/Company');

exports.createCompany = async (req, res) => {
  const company = new Company({ ...req.body, userId: req.user._id });
  await company.save();
  res.status(201).json(company);
};

exports.getCompanies = async (req, res) => {
  const companies = await Company.find({ userId: req.user._id });
  res.json(companies);
};

exports.updateCompany = async (req, res) => {
  const { id } = req.params;
  const updated = await Company.findOneAndUpdate(
    { _id: id, userId: req.user._id },
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.deleteCompany = async (req, res) => {
  const { id } = req.params;
  await Company.findOneAndDelete({ _id: id, userId: req.user._id });
  res.json({ message: 'Eliminado' });
};
