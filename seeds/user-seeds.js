const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [{
        username: 'r00ster_96',
        email: 'r00ster@gmail.com',
        password: 'password123'
    },
    {
        username: 'jwillson-23',
        email: 'jwillson@gmail.com',
        password: 'password123'
    },
    {
        username: 'sBoom!',
        email: 'sboom@gmail.com',
        password: 'password123'
    },
    {
        username: 'Mr.Chico',
        email: 'mrchico@gmail.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;