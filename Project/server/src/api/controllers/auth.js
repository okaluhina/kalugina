const User = require('../models/user.model');

module.exports = {
  login: async (req, res) => {
    const token = req.user.generateAuthToken();
    res.send({ token, role: req.user.role });
  },
  logout: async (req, res) => {
    res.send('log out')
  },
  secret: async (req, res) => {
    res.send('secret!!')
  },
  //send token after auth with google
  redirect: async (req, res) => {
    const user = await User.findById(req.user._id);
    
    const token = user.generateAuthToken();
    res.send({ token });
  }, 
}
