const pool = require('../database/connection');

const binanceP2PData = async() => {
    try {
        const binanceP2PRow = await pool.query('SELECT ?? FROM ??', [
            [
                'plataforma',
                'creado',
                'precioCompra',
                'precioVenta',
            ],
            'binance_p2p'
        ])
        return binanceP2PRow;
    } catch (error) {
        console.error(error)
    }
};

// console.log(binanceP2PData());

const binanceP2PController = binanceP2PData()

module.exports = binanceP2PController;
