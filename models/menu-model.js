
// http://docs.sequelizejs.com/manual/data-types.html

module.exports = sequelize.define('Menu', {
    status: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    label: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    priceDF: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false
    },
    availableForWeeks: {
        type: Sequelize.STRING(300),
        allowNull: true
    },
    image64: {
        type: Sequelize.TEXT,
        allowNull: true
    }
},
{
    tableName: 'ltmenu'
});
