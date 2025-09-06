const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/water_management';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const usageSchema = new mongoose.Schema({
    user: String,
    amount: Number,
    timestamp: { type: Date, default: Date.now }
});

const WaterUsage = mongoose.model('WaterUsage', usageSchema);

module.exports = WaterUsage;