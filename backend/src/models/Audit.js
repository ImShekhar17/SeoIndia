const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Audit = sequelize.define('Audit', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    overallGrade: {
        type: DataTypes.STRING,
        allowNull: true
    },
    totalScore: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('pending', 'processing', 'completed', 'failed'),
        defaultValue: 'pending'
    },
    message: {
        type: DataTypes.STRING,
        allowNull: true
    },
    results: {
        type: DataTypes.JSONB,
        allowNull: true,
        comment: 'Stores full audit metrics and recommendations'
    }
}, {
    tableName: 'audits',
    timestamps: true,
    indexes: [
        {
            unique: false,
            fields: ['url']
        },
        {
            unique: false,
            fields: ['userId']
        },
        {
            unique: false,
            fields: ['createdAt']
        }
    ]
});

module.exports = Audit;
