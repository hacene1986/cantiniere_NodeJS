const jwtUtil = require('../utils/jwt');

module.exports = (req, res, next) => {
    const token = req.header('Authorization');
    console.log(token);

    jwtUtil.verifyToken(token, (err, payload) => {
        if (err) {
            res.status(401).json({ message: 'Unauthorized' });
        } else {
            if (!req.payload) {
                req.payload = payload;
            }
            next();
        }
    });
};
