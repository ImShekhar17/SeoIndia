const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Subscriber = sequelize.define('Subscriber', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('active', 'unsubscribed'),
        defaultValue: 'active'
    },
    source: {
        type: DataTypes.STRING,
        defaultValue: 'unknown'
    }
}, {
    timestamps: true
});

module.exports = Subscriber;
