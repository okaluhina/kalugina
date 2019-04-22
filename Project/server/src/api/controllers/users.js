//const httpStatus = require("http-status");
const User = require('../models/user.model');

module.exports = {
  get: async (req, res) => {
    //валидация параметров
    const {
      pageNumber,
      pageSize,
      sortBy,
      sortOrder,
      role,
      status
    } = req.query

    const users = await User    
      .find({ role, status })
      .populate('company')
      .skip((pageNumber - 1) * pageSize)
      .limit(Number.parseInt(pageSize))
      .sort({[sortBy]: sortOrder})
      //all except password
      .select({'local.password': 0})
      .exec();
    
    res.send(users);
  },
  getById: async (req, res) => {
    const user = await User.findById({ _id: req.userId });
    if (!user) return res.status(404).send();
    
    res.send(user);
  },
  put: async (req, res) => {
    //change
    const user = await User.findByIdAndUpdate(req.params.id,
      {
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        role: req.body.role,
        status: req.body.status,
        blockReason: req.body.blockReason,
        companyId: req.body.companyId
      }, { new: true });
  
    if (!user) return res.status(404).send('The user with the given ID was not found.');
    res.send(user);
  },
  //if it is company, also delete company
  delete: async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, {
      isDeleted: true
    });
    
    if (!user) return res.status(404).send('The user with the given ID was not found.');

    res.send();
  },
}
