const { Hype } = require('../models');

const hypeData = [
  {
    name: 'Bitcoin',
    popularity: '1', 
    created_year: '2009',
    categories_id: '1'
  },
  {
    name: 'Yeezy Foam Runner',
    popularity: '2',
    created_year: '2020',
    categories_id: '2'
  },
  {
    name: 'Empire State Building',
    popularity: '5',
    created_year: '1930',
    categories_id: '3'
  },
  {
    name: 'Lamborghini Aventador',
    popularity: '3',
    created_year: '2011',
    categories_id: '4'
  },
  {
    name: 'Miami Heat',
    popularity: '8',
    created_year: '1988',
    categories_id: '5'
  },
];

const seedHypeData = () => Hype.bulkCreate(hypeData);

module.exports = seedHypeData;
