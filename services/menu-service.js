// services/MenuService.js

const MenuModel = require('../models/menu-model');

exports.all = () => MenuModel.findAll();

exports.findById = id => {
    return MenuModel.findOne({
        where: {
            id: id
        }
    });
};

exports.create = menu => {

    return MenuModel.create({
     status: 0,
     label: menu.label,
     description: menu.description,
     priceDF: menu.priceDF
    });
};