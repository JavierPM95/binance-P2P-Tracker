const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!!!!')
})

app.use('/history', require('./binanceP2P'))

module.exports = router;