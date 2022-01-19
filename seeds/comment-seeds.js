const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Love it!',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Interesting post!',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: 'Interesting post!',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Love it!',
        user_id: 4,
        post_id: 1
    },
    {
        comment_text: 'Im so afraid of volcanoes...',
        user_id: 4,
        post_id: 1
    },
    {
        comment_text: 'I wonder if an actual sunami will develop?',
        user_id: 4,
        post_id: 1
    },
    {
        comment_text: 'How is the even possible?',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'This will kill the auto paint job industry',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Always BMW with the most advanced tech!',
        user_id: 4,
        post_id: 2
    },
    {
        comment_text: 'These will becomen a classic!',
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: 'Love the Simpsons!',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'Hes so old but plays like a 20 year old!',
        user_id: 3,
        post_id: 4
    },
    {
        comment_text: 'Such a big fan of BRADY!',
        user_id: 1,
        post_id: 4
    },
    {
        comment_text: 'It`s a huge drone!',
        user_id: 4,
        post_id: 5
    },
    {
        comment_text: 'The future is here...',
        user_id: 2,
        post_id: 5
    },
    {
        comment_text: 'Cant wait to have them!',
        user_id: 4,
        post_id: 6
    },
    {
        comment_text: 'Buying!',
        user_id: 3,
        post_id: 6
    },
    {
        comment_text: 'I own 7 properties in Manhattan',
        user_id: 2,
        post_id: 7
    },
    {
        comment_text: 'Will this really take off?',
        user_id: 1,
        post_id: 7
    },
    {
        comment_text: 'Welcome to the future!',
        user_id: 1,
        post_id: 8
    },
    {
        comment_text: '3D printed meat?? YUCK!',
        user_id: 4,
        post_id: 8
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;