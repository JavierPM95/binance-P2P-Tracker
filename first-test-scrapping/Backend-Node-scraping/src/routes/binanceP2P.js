const express = require('express');
const router = express.Router();

router.get('/binance', async (req, res) => {
    try {
        const binanceP2PController = await require('../controllers/binanceP2PController')
        console.log(binanceP2PController);
        res.send({
            code: 200,
            binanceHistory: binanceP2PController,
        })
    } catch (error) {
        console.error(error)
    }
})

module.exports = router;