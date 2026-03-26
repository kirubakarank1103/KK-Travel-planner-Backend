const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  destination: {
    type: String,
    required: true,
    trim: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  budget: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    enum: ['leisure', 'business', 'adventure', 'cultural', 'beach', 'honeymoon', 'family'],
    default: 'leisure'
  }
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema);