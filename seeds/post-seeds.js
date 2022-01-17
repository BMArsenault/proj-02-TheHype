const { Post } = require('../models');

const postdata = [
    {
        title: 'Underwater Volcano Erupts',
        description: 'A volcano erupts underwater near New Zealand causing panic of a possible Tsunami',
        category_id: 1,
        image_name: 'Screenshot 2022-01-13 193423.png',
        user_id: 2,
    },
    {
        title: 'BMW Color Changing Paint',
        description: 'BMW releases a car with paint color that changes.  This may be the new trend in car purchasing but some people are saying it may not go over well with the Motor Vehicles Department.',
        category_id: 2,
        image_name: 'Screenshot 2022-01-13 193423.png',
        user_id: 3,
    },
    {
        title: 'Newest Shoes',
        description: 'Adidas teams up with The Simpsons to release a sneaker in collaboration with Ned Flanders.  The color scheme matches the clothes Ned wears in the Simpsons show.',
        category_id: 3,
        image_name: 'Screenshot 2022-01-13 193423.png',
        user_id: 1,

    },
    {
        title: 'Tom Brady Does It Again',
        description: 'Tom Brady continues to amaze in his 22nd season.  He led the league in TD passes and yardage at the age of 44.',
        category_id: 4,
        image_name: 'Screenshot 2022-01-13 193423.png',
        user_id: 3,
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;