const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require("../config/environment");

const userSchema = new mongoose.Schema({
  method: {
    type: String, 
    enum: ['local', 'google', 'facebook'],
    require: true
  },
  local: {
    email: {
      type: String,
      lowercase: true,
      trim: true,
      minlength: 6,
      maxlength: 30,
      match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      lowercase: true
    },
    password: {
      type: String,
      minlength: 6,
      maxlength: 1024,
    },
  },
  google: {
    id: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    }
  },
  username: {
    type: String
  },
  phone: {
    type: String,
    minlength: 6,
    maxlength: 30,
    match: /[\d]+/,
    required: function() {
      return !(this.local.email.length > 0)
    }
  },
  role: {
    type: String,
    enum: ['admin', 'company', 'client'],
    default: 'client'
  },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: 'company'
  },
  status: {
    type: String,
    enum: ['unverified','active', 'blocked'],
    default: 'unverified'
  },
  blockReason: {
    type:String,
    minlength: 6,
    maxlength: 1024
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  verificationCode: {
    type: Number,
    default: function() {
      if (this.role === 'client') {
        return Math.round(Math.random() * (999999 - 100000) + 100000);
      } else {
        return null
      }
    }
  },
  verificationAttempt: {
    type: Number,
    default: 0
  },
  address: {
    country: {
      type: String,
      minlength: 2,
      maxlength: 30,
    },
    state: {
      type: String,
      minlength: 2,
      maxlength: 30,
    },
    city: {
      type: String,
      minlength: 2,
      maxlength: 30,
    },
    street: {
      type: String,
      minlength: 2,
      maxlength: 30,
    },
    apartment: {
      type: String,
      maxlength: 30,
    }
  },
  photoUrl: {
    type: String,
    minlength: 2,
    maxlength: 300,
  },
  notificationOn: {
    type: Boolean,
    default: false
  },
});

const JWT_SECRET = config.jwt.secret;

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({
    sub: this._id,
    role: this.role,
    iat: new Date().getTime(),
    //тут должно быть значение из .env
    exp: new Date().setDate(new Date().getDate() + 1), //current + 1 day
    
  }, JWT_SECRET);
  return token;
}

userSchema.methods.hashPassword = async function () {
  try {
    const salt = await bcrypt.genSalt(10);
    this.local.password = await bcrypt.hash(this.local.password, salt);
  }
  catch (error) {
    next(error);
  }
}

userSchema.methods.validatePassword = async function(assumedPassword) {
  try {
    return await bcrypt.compare(assumedPassword, this.local.password);
  }
  catch (error) {
    throw new Error(error);
  }
};

userSchema.methods.validateCode = async function(assumedCode) {
  if (this.verificationCode === assumedCode) {
    return true;
  }
  return false;
};

const User = mongoose.model('User', userSchema);

module.exports = User;

/*
связать 2 модели
у юзера массив машин
userSchema({
  cars: [{
    type:Schema.Types.ObjectId,
    ref: 'car'
  }]
})


carSchema({
  seller: {
    type:Schema.Types.ObjectId,
    ref: 'user'
  }
})

потом можно просто
const user = await User.findById(userId);
newCar.seller =  user;

user.cars.push(newCar)

 в базе хранятся толко id, можем использовать для получения юзера со всеми объектами:
 User.findById(userId).populate(cars)

*/