
module.exports = sequelize.define('Order', {
    status: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    menuId: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
   
   creationDate: Sequelize.DATE
    
},
{
    tableName: 'ltorder'
});
