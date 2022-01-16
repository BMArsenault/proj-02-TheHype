const { Post } = require('../models');

const postdata = [{
        title: 'About this blog!',
        description: 'The first 4 posts you see here have been pre-seeded to give some context to new users. Feel free to signup and start creating and editing your own posts! You can also comment on other posts once you sign up or log in.',
        user_id: 2
    },
    {
        title: 'Why MVC is so important',
        description: 'MVC allows developers to mantain a true separation of concerns, devising their code between the Model layer for data, the View layer of design, and the Controller layer for application logic.',
        user_id: 3
    },
    {
        title: 'Authentication vs. Authorization',
        description: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.',
        user_id: 1
    },
    {
        title: 'Object-Relational Mapping',
        description: 'ORM simplifies the way we create queries in SQL!',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;