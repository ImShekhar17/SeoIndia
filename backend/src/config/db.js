const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false, // Set to console.log to see SQL queries
        pool: {
            max: 150,           // Maximum concurrent connections for high-burst 50k+ RPS
            min: 10,            // Maintain warm connections for zero-latency startup
            acquire: 60000,     // Allow longer wait time during extreme pressure
            idle: 5000,         // Quickly release idle connections to free DB memory
            evict: 1000,        // Rapidly evict dead connections
        }
    }
);

const logger = require('../utils/logger');

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        logger.info('PostgreSQL Database Connected Successfully.');
    } catch (error) {
        logger.error('Unable to connect to the database:', error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
