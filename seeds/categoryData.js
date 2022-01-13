const { Categories } = require('../models');

const categoryData = [
  {
    hype_name: 'Crypto'
  },
  {
    hype_name: 'Sneakers'
  },
  {
    hype_name: 'Architecture'
  },
  {
    hype_name: 'Cars'
  },
  {
    hype_name: 'Sports'
  },
];

const seedCategories = () => Categories.bulkCreate(categoryData);

module.exports = seedCategories;
