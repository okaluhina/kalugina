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
    console.log(req);
    const user = await User.findById(req.user._id);
    
    const token = user.generateAuthToken();
    //res.redirect(200, 'http://localhost:3000/')
    //res.redirect(200, 'http://localhost:3000/?token=' + token)
    res.send({ token });
  }, 
}
