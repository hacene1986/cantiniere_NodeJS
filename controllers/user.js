// controllers/user.js

const UserService = require('../services/user-service');
const jwtUtil = require('../utils/jwt');

exports.login = (req, res) => {
    const body = req.body;

    UserService.authenticate({
        email: body.email,
        password: body.password
    }).then(
        data => {
            jwtUtil.generateToken(data, (err, token) => {
                if (err) {
                    res.status(401).json(err);
                    return;
                }
                res.header('Authorization', 'Bearer ' + token);
                res.status(204).json({});
            });
        },
        err => {
            res.status(500).json(err);
        }
    );
}

exports.register = (req, res) => {
    const user = req.body;

    UserService.create(user)
        .then(
            data => {
                res.status(201).json(data);
            },
            err => {
                res.status(500).json(err);
            }
        );
}
