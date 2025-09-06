const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/water_management', { useNewUrlParser: true, useUnifiedTopology: true });

const usageSchema = new mongoose.Schema({
    user: String,
    amount: Number,
    timestamp: { type: Date, default: Date.now }
});

const WaterUsage = mongoose.model('WaterUsage', usageSchema);

module.exports = WaterUsage;