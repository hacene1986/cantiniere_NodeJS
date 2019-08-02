const OrderService = require('../services/order-service');
const OrderModel = require('../models/order-model')

exports.home = (req, res) => {
    OrderService.all().then(
        data => {
           // console.log(data)
            res.json(data);
        },
        err => {
            res.json(err);
        }
    );
};