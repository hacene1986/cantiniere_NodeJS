// models/UserModel.js

module.exports = sequelize.define('User', {
    status: {
        type: Sequelize.INTEGER(1),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(256),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(300),
        allowNull: false
    },
    sex: Sequelize.INTEGER(1),
    name: Sequelize.STRING,
    firstname: Sequelize.STRING(256),
    wallet: Sequelize.DECIMAL(5,2),
    registrationDate: Sequelize.DATE,
    isLunchLady: Sequelize.INTEGER,
    phone: Sequelize.STRING(15),
    address: Sequelize.STRING(500),
    postalCode: Sequelize.STRING(10),
    town: Sequelize.STRING(150),
    image64: Sequelize.TEXT
}, {
    tableName: 'LTUser'
});
