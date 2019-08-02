// controllers/index.js
// Routes by default

const PlatService = require('../services/plat-service');
const PlatModel = require('../models/plat-model')
exports.hello = (req, res) => {
    res.send({
        message: 'Hello guys !'
    });
}

exports.home = (req, res) => {
    PlatService.all().then(
        data => {
           // console.log(data)
            res.json(data);
        },
        err => {
            res.json(err);
        }
    );
};

exports.platId = (req, res) => {
    PlatService.findById(req.params.id).then(
        data =>{
            console.log(data)
            res.json(data);
        }
    )
}

exports.addPlat = (req, res) => {
    const plat = req.body;

    PlatService.create(plat)
        .then(
            data => {
                res.status(201).json(data);
            },
            err => {
                res.status(500).json(err);
            }
        );
}

exports.update = (req, res) => {
    const id = req.params.id;
    PlatModel.update( { label: req.body.label, description: req.body.description, priceDF: req.body.priceDF }, 
             { where: {id: req.params.id} }
             ).then(() => {
             res.status(200).send("updated successfully a meal with id = " + id);
             });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
    PlatModel.destroy({
      where: { id: id }
    }).then(() => {
      res.status(200).send('deleted successfully a meal with id = ' + id);
    });
  };
   
