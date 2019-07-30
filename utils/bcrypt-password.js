const bcrypt = require('bcryptjs');

exports.hashSync = plainText => {
    const salt = bcrypt.genSaltSync(8);
    return bcrypt.hashSync(plainText, salt);
}

exports.verifySync = (plainText, hash) => {
    return bcrypt.compareSync(plainText, hash);
}
