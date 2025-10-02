import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      required: [true, 'Please provide a date of birth'],
      validate: {
        validator: function(value) {
          return value <= new Date();
        },
        message: 'Date of birth cannot be in the future'
      }
    },
    memberNumber: {
      type: Number,
      required: [true, 'Please provide a member number'],
    },
    interests: {
      type: String,
      trim: true,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);
const Customer = mongoose.models.Customer || mongoose.model('Customer', CustomerSchema);

export default Customer;