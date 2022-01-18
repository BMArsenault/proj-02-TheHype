const { Category } = require('../models');

const categorydata = [{
    category_name: 'Sports',
}, {
    category_name: 'World',
}, {
    category_name: 'Streetwear',
}, {
    category_name: 'Food & Drink',
}, {
    category_name: 'Cars',
}, {
    category_name: 'Crypto',
}];

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;