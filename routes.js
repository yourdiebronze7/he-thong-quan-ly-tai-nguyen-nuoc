const express = require('express');
const router = express.Router();
const WaterUsage = require('./database');

router.post('/record', async (req, res) => {
    const { user, amount } = req.body;
    const newUsage = new WaterUsage({ user, amount });
    await newUsage.save();
    res.status(201).send(newUsage);
});

router.get('/usages', async (req, res) => {
    const usages = await WaterUsage.find();
    res.send(usages);
});

module.exports = router;