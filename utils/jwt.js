const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = 'fg6#4df56@6s989-5P21dfklqsd-jfk-ldf8ze5dfkze@jwxd';

exports.generateToken = (user, callback) => {
    jwt.sign(
        {
            id: user.id,
            name: user.name
        },
        JWT_SECRET_KEY,
        {
            algorithm: 'HS256',
            expiresIn: 500
        },
        callback
    );
};

exports.verifyToken = (token, callback) => {
    jwt.verify(token, JWT_SECRET_KEY, callback);
};
