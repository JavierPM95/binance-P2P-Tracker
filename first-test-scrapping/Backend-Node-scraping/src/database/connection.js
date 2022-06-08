const mysql = require('mysql');
const {database} = require('./keys')
const { promisify } = require('util')

// Pasar credenciales de la DB
const pool = mysql.createPool(database);

// Crear conexion
pool.getConnection((err, connection) => {
    if (err) {  
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Conexion con la DB esta cerrada');
        } else if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Sobrecarga de peticiones en la DB');
        } else if (err.code === 'ECONNREFUSED') {
            console.error('La conexion con la DB ha sido rechazada');
        } else {
            console.error(err);
        }
    }

    // Lanzar conexion
    if (connection) connection.release();
    console.log('✅ Conexion a DB exitosa');
    return;
})

// Habilitar promesas al usar:
pool.query = promisify(pool.query);

module.exports = pool;