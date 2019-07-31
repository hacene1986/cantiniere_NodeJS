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
    MenuService.findById(req.params.id).then(
        data =>{
            console.log(data)
            res.json(data);
        }
    )
}

exports.addMenu = (req, res) => {
    const menu = req.body;

    MenuService.create(menu)
        .then(
            data => {
                console.log(menu)
                res.status(201).json(data);
            },
            err => {
                res.status(500).json(err);
            }
        );
}
