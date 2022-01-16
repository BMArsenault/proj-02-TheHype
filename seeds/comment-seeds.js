const { Comment } = require('../models');

const commentdata = [{
        comment_text: 'Love it!',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Interesting post!',
        user_id: 3,
        post_id: 4
    },
    {
        comment_text: 'Interesting post!',
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: 'Love it!',
        user_id: 4,
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;