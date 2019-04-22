const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  text: {
    type: String,
    minlength: 2,
    maxlength: 300
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  CreatedAt: {
    type: Date,
    default: Date.now
  }
});

const cleaningSchema = new mongoose.Schema({
  isAvailable: {
    type: Boolean,
    default: false
  },
  price: {
    small: {
      type: Number,
      min: 0,
      required: function() {
        return (this.isAvailable);
      }
    },
    big: {
      type: Number,
      min: 0,
      required: function() {
        return (this.isAvailable);
      }
    },
    bathroom: {
      type: Number,
      min: 0,
      required: function() {
        return (this.isAvailable);
      }
    }
  }
 });

 const poolAndDryCleaningSchema = new mongoose.Schema({
  isAvailable: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
      min: 0,
      required: function() {
        return (this.isAvailable);
      }
  }
 });

const cleaningServicesSchema = new mongoose.Schema({
  cleaning: {
    isAvailable: {
      type: Boolean,
      default: false
    },
    types: {
      basic: {type: [cleaningSchema]},
      spring: {type: [cleaningSchema]},
      construction: {type: [cleaningSchema]},
      office: {type: [cleaningSchema]},
      industrial: {type: [cleaningSchema]}
    }
  },
  poolCleaning: {
    isAvailable: {
      type: Boolean,
      default: false
    },
    types: {
      basic: {type: [poolAndDryCleaningSchema]},
      spring: {type: [poolAndDryCleaningSchema]}
    }
  },
  dryCleaning: {
    isAvailable: {
      type: Boolean,
      default: false
    },
    types: {
      carpet: {type: [poolAndDryCleaningSchema]},
      furniture: {type: [poolAndDryCleaningSchema]}
    }
  }
 });

const companySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  logoUrl: {
    type: String,
    minlength: 2,
    maxlength: 300,
    required: true
  },
  description: {
    type: String,
    minlength: 2,
    maxlength: 300,
    required: true
  },
  address: {
    country: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true
    },
    state: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true
    },
    city: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true
    },
    street: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true
    },
    apartment: {
      type: String,
      maxlength: 30,
    },
    geo: {
      lat: {},
      lng: {}
    }
  },
  totalRating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  reviews: {
    type: [reviewSchema],
    default: []
  },
  popularity: {
    type: Number,
    min: 0,
    default: 0
  },
  services: {
    type: cleaningServicesSchema
  },
  workingHours: {},
  isDeleted: {
    type: Boolean,
    default: false,
  },
  CreatedAt: {
    type: Date,
    default: Date.now
  }
});

//CreatedAt, CreatedBy, UpdatedAt, UpdatedBy

const Company = mongoose.model('Company', companySchema);

module.exports = Company;

