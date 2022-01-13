const seedComments = require('./comment-seeds');
const seedRatings = require('./ratings-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUsers();
    console.log('--------------');

    await seedPosts();
    console.log('--------------');

    await seedComments();
    console.log('--------------');

    await seedRatings();
    console.log('--------------');

    process.exit(0);
};

seedAll();