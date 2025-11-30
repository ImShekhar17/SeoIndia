const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    permissions: {
        type: DataTypes.JSONB,
        defaultValue: [],
        comment: 'Array of strings representing permission keys (e.g., audit:create, user:read)'
    }
}, {
    tableName: 'roles',
    timestamps: true
});

module.exports = Role;
