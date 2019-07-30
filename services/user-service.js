// services/UserService.js

const UserModel = require('../models/user-model');
const password = require('../utils/bcrypt-password');

exports.create = user => {
    const pass = password.hashSync(user.password);

    return UserModel.create({
        status: 0,
        firstname: user.firstname,
        email: user.email,
        name: user.name,
        password: pass
    });
};

exports.all = () => UserModel.findAll();

exports.findByEmail = email => {
    return UserModel.findOne({
        where: {
            email: email
        }
    });
};

exports.authenticate = data => {
    return this.findByEmail(data.email).then(
        user => {
            if (!user) {
                throw new Error('user not found');
            }

            const ok = password.verifySync(data.password, user.password);
            if (!ok) {
                throw new Error('password is invalid');
            }

            return user;
        }
    );
};
