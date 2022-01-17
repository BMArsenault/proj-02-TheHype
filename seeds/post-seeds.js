const { Post } = require('../models');

const postdata = [{
    title: 'About this blog!',
    description: 'The first 4 posts you see here have been pre-seeded to give some context to new users. Feel free to signup and start creating and editing your own posts! You can also comment on other posts once you sign up or log in.',
    category_id: 1,
    image_name: 'Screenshot 2022-01-13 193423.png',
    user_id: 2,

}];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;