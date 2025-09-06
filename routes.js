const express = require('express');
const router = express.Router();
const WaterUsage = require('./database');

router.post('/record', async (req, res) => {
    try {
        const { user, amount } = req.body;
        const newUsage = new WaterUsage({ user, amount });
        await newUsage.save();
        res.status(201).send(newUsage);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to record water usage' });
    }
});

router.get('/usages', async (req, res) => {
    try {
        const usages = await WaterUsage.find();
        res.send(usages);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to retrieve usages' });
    }
});

module.exports = router;