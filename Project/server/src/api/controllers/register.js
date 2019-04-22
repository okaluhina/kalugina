const Fawn = require('fawn');
const mongoose = require('mongoose');
var randomstring = require("randomstring");
const User = require('../models/user.model');
const Client = require('../models/client.model');
const Company = require('../models/company.model');
const VerifyCompany = require('../models/verifyCompany.model');
const sendVerificationMail = require('../config/mailer');

Fawn.init(mongoose);

module.exports = {
  client: async (req, res) => {
    //валидация body
    console.log(req.body);
    const { username, email, password, phone } = req.body;
    const user = await User.findOne({ 'local.email': email });
    
    if (user) return res.status(400).send('User already exist.');

    const newUser = new User({
      method: 'local',
      'local.email': email,
      'local.password': password,
      username,
      phone
    });
    await newUser.hashPassword();
    await newUser.save();
    const emailText = `Here yours verification code: <b>${newUser.verificationCode}</b>`;
    //await sendVerificationMail(newUser.email, emailText)
    res.status(201).send({userId: newUser._id});
  },
  company: async (req, res) => {
    //валидация body
    const { email, password, role } = req.body;
    const user = await User.findOne({ 'local.email': email });
    if (user) return res.status(400).send('User already exist.');

    const newUser = new User({ 
      method: 'local',
      'local.email': email,
      'local.password': password,
      role
     });
    await newUser.hashPassword();

    const newCompany = new Company({
      user: newUser._id,
      title: req.body.title,
      logoUrl: req.body.logoUrl,
      description: req.body.description,
      address: req.body.address,
      services: req.body.services,
    });

    const rand = randomstring.generate(24);
    const newVerifyCompany = new verifyCompany({
      _userId: newUser._id,
      token: rand,
    });
    //newVerifyCompany.save();

    await Fawn.Task()
        .save('users', newUser)
        .save('companies', newCompany)
        .save('verifycompanies', newVerifyCompany)
        .run();
    
    
    const link = `http://${req.get('host')}/company/verify?id=${newUser._id}&token=${rand}`;
    const emailText = `Hello,<br> Please Click on the link to
     verify your email.<br><a href=${link}>Click here to verify</a>`;
    
    res.status(201).send({userId: newUser._id});

    //await sendVerificationMail(newUser.email, emailText);
  },
  verifyClient: async (req, res) => {
    // validate req.body пришел айди userId и код verificationCode
    const user = await User.findById(req.body.userId);
    if (!user) return res.status(400).send('User with given id was not found.');

    if (user.status !== 'unverified') return res.status(400).send('User with given id was verified.');

    if (user.verificationCode === req.body.verificationCode) {
      user.status = 'active';
      await user.save();
      const token = user.generateAuthToken();
      return res.send({ token });
    } else {
      user.verificationAttempt++;

      if (user.verificationAttempt < 5) {
        await user.save();
        return res.status(400).send('Invalid code. Try again.')
      }

      await Client.findOneAndDelete({userId: req.body.userId});
      await User.findByIdAndDelete(req.body.userId);
      res.status(204).send();
    }  
  },
  verifyCompany: async (req, res) => {
    // validate req.body userId, verificationCode
    const { verificationCode, userId } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(400).send('User with given id was not found.');

    if (user.status !== 'unverified') return res.status(400).send('User with given id was verified.');

    const verifyCompany = await VerifyCompany.find({ _userId: userId });

    //need to test this
    if (!verifyCompany) return res.status(400).send('Token expired');

    if (verifyCompany.token === verificationCode) {
      user.status = 'active';
      await user.save();
      const token = user.generateAuthToken();
      return res.send({ token });
    }

    res.status(400).send('Token expired or invalid');  
  },
}
