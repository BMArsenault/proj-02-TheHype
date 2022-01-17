const { Category } = require('../models');

const categorydata = [{
    category_name: 'Sneakers',
}, {
    category_name: 'Arts',
}, {
    category_name: 'Streatwear',
}, {
    category_name: 'Drinks',
}, {
    category_name: 'Cars',
}, {
    category_name: 'Crypto',
}];

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;