const pool = require('../database/connection');

const binanceInspectorData = async() => {
    try {
        const binanceOperaciones = await require("../components/binanceP2PInspector");
        // console.log(binanceP2PInspector);
        
        operacionesData = {
            plataforma: 'Binance',
        }

        const operacionesCompra = () => {
            const { vendor, prices, } = binanceOperaciones[0][0];
            operacionesData = {
                ...operacionesData,
                precioCompra: prices,
            }
        }
        operacionesCompra();

        const operacionesVenta = () => {
            const { vendor, prices, } = binanceOperaciones[0][1];
            operacionesData = {
                ...operacionesData,
                precioVenta: prices,
            }
        }
        operacionesVenta();

        console.log(operacionesData);
        await pool.query( 'INSERT INTO binance_p2p SET ?', operacionesData )
        return
    } catch (error) {
        console.error(error)
    }
    return
}

const binanceP2PInspectorController = binanceInspectorData();

module.export = binanceP2PInspectorController