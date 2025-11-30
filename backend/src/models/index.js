const User = require('./User');
const Audit = require('./Audit');
const Role = require('./Role');
const Setting = require('./Setting');
const Subscriber = require('./Subscriber');
const Newsletter = require('./Newsletter');

// Associations
User.hasMany(Audit, { foreignKey: 'userId', as: 'audits' });
Audit.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Role.hasMany(User, { foreignKey: 'roleId', as: 'users' });
User.belongsTo(Role, { foreignKey: 'roleId', as: 'assignedRole' });

module.exports = { User, Audit, Role, Setting, Subscriber, Newsletter };
