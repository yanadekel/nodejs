const mongoose = require('mongoose');
const validator = require("validator");

// const imgSchema = mongoose.Schema({
//   type: String,

//   validate(value) {
//     if (value.length < 2) {
//       throw new Error('need to add to photos')
//     }
//   }

// })


// const detailsSchema = mongoose.Schema({
//   description: {
//     type: String,
//     required: true,
//     min: 10
//   },
//   price: {
//     type: Number,
//     required: true,

//     validate(value) {
//       if (value < 0) {
//         throw new Error('price number must be 0 or more')
//       }
//     }
//   },

//   discount: {
//     type: Number,
//     required: false,
//     default: 0
//   },

//   img: [imgSchema]
//   //   // type: Array,
//   //   // required: false,
//   //   // unique: false,

// })




const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
    unique: true,

  },
  category: {
    type: String,
    required: true,
    unique: false,

  },
  isActive: {
    type: Boolean,
    required: false,
    unique: false,
    default: true
  },
  details: {
    description: {
      type: String,
      required: true,
      min: 10
    },
    price: {
      type: Number,
      required: true,

      validate(value) {
        if (value < 0) {
          throw new Error('price number must be 0 or more')
        }
      }
    },

    discount: {
      type: Number,
      required: false,
      default: 0
    },

    img: {
      type: Array,

      validate(value) {
        if (value.length < 2) {
          throw new Error('need to add two photos')
        }
      }
    },
    phone: {
      type: String,
      minLength: 10,
      required: true,
      validate(value) {
       
        if (!validator.isMobilePhone(value, "he-IL") ) {
          throw new Error("Not A valid israeli Number");
        }
      }

    },

    date: {
      type: Date,
      required: false,
      unique: false,
      default: Date.now()
    }




  }
})

const productmodel = mongoose.model('products', productSchema);
module.exports = productmodel;