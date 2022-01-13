const { Post } = require('../models');

const postdata = [{
        name: 'Bitcoin',
        created_year: '2009',
        categories_id: '1'
    },
    {
        name: 'Yeezy Foam Runner',
        created_year: '2020',
        categories_id: '2'
    },
    {
        name: 'Empire State Building',
        created_year: '1930',
        categories_id: '3'
    },
    {
        name: 'Lamborghini Aventador',
        created_year: '2011',
        categories_id: '4'
    },
    {
        name: 'Miami Heat',
        created_year: '1988',
        categories_id: '5'
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;