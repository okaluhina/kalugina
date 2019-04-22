/*Основные поля (все поля обязательны для заполнения):
- Адрес / местоположение
- Тип уборки
- Описание помещения (количество маленьких/больших комнат, количество санузлов)
- День / дни
- Ожидаемое время начала уборки
- Планируемая регулярность уборки (только один раз, каждую неделю, каждые две недели,
каждый месяц). Если уборка рекуррентная, также должна быть указана продолжительность
сделки (максимум – полгода).
- Если клиент не залогинился, должно присутствовать поле email или телефона для
подтверждения заказа.*/


const bookingSchema = new mongoose.Schema({
  // все данные должны сохраняться в заказе
  // клиент может не иметь ид
  client: {
    type: mongoose.Schema.ObjectId
  },
  company: {
    type: mongoose.Schema.ObjectId
  },
  // адрес и контакты клиента
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
    zipCode: {},
    geo: {
      lat: {},
      lng: {}
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  modifiedAt: {
    type: Date,
  },
  cleaningKind: {},
  cleaningType: {},
  cleaningDescription: {
    cleaning: {
      price: {
        small: {},
        big: {},
        bathroom: {}
      },
      rooms: {
        small: {},
        big: {},
        bathroom
      }
    },
    poolCleaning: {
      area: {},
      price: {}
    },
    dryCleaning: {
      area: {},
      price: {}
    }
  },
  isFrequent: {},
  frequency: {},
  startDate: {},
  nextDate: {},
  duration: {
    value: {},
    unit: {}
  },
  // для анонимных пользователей
  email: {},
  phone: {},
  status: {},
  cancelReason: {},
  totalPrice: {}
});

bookingSchema.methods.calcTotalPrice = async function () {
  switch(this.cleaningKind) {
    case 'cleaning': 
      return 'price';
    case 'poolCleaning':
      return 'price';
    case 'dryCleaning':
      return 'price';
  }
};

const mongoose = require('mongoose');

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;


// client: {
//   type: mongoose.Schema.ObjectId
// },
// company: {
//   type: mongoose.Schema.ObjectId
// },
// // адрес и контакты клиента
// address: {
//   country: {
//     type: String,
//     minlength: 2,
//     maxlength: 30,
//     required: true
//   },
//   state: {
//     type: String,
//     minlength: 2,
//     maxlength: 30,
//     required: true
//   },
//   city: {
//     type: String,
//     minlength: 2,
//     maxlength: 30,
//     required: true
//   },
//   street: {
//     type: String,
//     minlength: 2,
//     maxlength: 30,
//     required: true
//   },
//   apartment: {
//     type: String,
//     maxlength: 30,
//   },
//   zipCode: {},
//   geo: {
//     lat: {},
//     lng: {}
//   }
// },
// createdAt: {
//   type: Date,
//   default: Date.now
// },
// modifiedAt: {
//   type: Date,
// },
// cleaningKind: {},
// cleaningType: {},
// cleaningDescription: {
//   cleaning: {
//     price: {
//       small: {},
//       big: {},
//       bathroom: {}
//     },
//     rooms: {
//       small: {},
//       big: {},
//       bathroom
//     }
//   },
//   poolCleaning: {
//     area: {},
//     price: {}
//   },
//   dryCleaning: {
//     area: {},
//     price: {}
//   }
// },
// isFrequent: {},
// frequency: {},
// startDate: {},
// nextDate: {},
// duration: {
//   value: {},
//   unit: {}
// },
// // для анонимных пользователей
// email: {},
// phone: {},
// status: {},
// cancelReason: {},
// totalPrice: {}