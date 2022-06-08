require('dotenv').config();

    const database = {
        database: {
            host: process.env.HOST || "localhost",
            user: process.env.DB_USER || "root",
            password: process.env.DB_PASS || "",
            database: process.env.DATABASE || "p2p_history",
        }
    }

module.exports = database;