// controllers/index.js
// Routes by default

const MenuService = require('../services/menu-service');

exports.hello = (req, res) => {
    res.send({
        message: 'Hello guys !'
    });
}

exports.home = (req, res) => {
    MenuService.all().then(
        data => {
           // console.log(data)
            res.json(data);
        },
        err => {
            res.json(err);
        }
    );
};

exports.menuId = (req, res) => {
    MenuService.findById(id).then(
        data =>{
            console.log(data)
        }
    )
}
