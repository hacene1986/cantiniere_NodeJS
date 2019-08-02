// services/MenuService.js

const PlatModel = require('../models/plat-model');

exports.all = () => PlatModel.findAll();

exports.findById = id => {
    return PlatModel.findOne({
        where: {
            id: id
        }
    });
};

exports.create = plat => {

    return PlatModel.create({
     status: 0,
     label: plat.label,
     description: plat.description,
     priceDF: plat.priceDF
    });
};
