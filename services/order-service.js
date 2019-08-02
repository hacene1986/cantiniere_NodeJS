const OrderModel = require('../models/order-model');

exports.all = () => OrderModel.findAll();