
module.exports = (req, res, next) => {
    const token = req.query.token;

    if (token === 'abcd') {
        next();
        return;
    }

    res.status(401);
    res.send('Unauthorized');
};
