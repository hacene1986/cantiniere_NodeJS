// services/MenuService.js

const MenuModel = require('../models/menu-model');

exports.all = () => MenuModel.findAll();

exports.findById = id => {
    return UserModel.findOne({
        where: {
            id: id
        }
    });
};