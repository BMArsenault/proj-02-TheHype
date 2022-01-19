const { Post } = require('../models');

const postdata = [{
    title: 'Underwater Volcano Erupts',
    description: 'A volcano erupts underwater near New Zealand causing panic of a possible Tsunami.  The eruption and subsequent tsunami caused "significant damage" along the western coast of the main island.',
    category_id: '2',
    image_name: 'underwatervolcano.jpg',
    user_id: 2,
},
{
    title: 'BMW Color Changing Paint',
    description: 'BMW releases a car with paint color that changes.  This may be the new trend in car purchasing but some people are saying it may not go over well with the Motor Vehicles Department.',
    category_id: '5',
    image_name: 'colorchangingpaint.jpg',
    user_id: 3,
},
{
    title: 'Newest Shoes',
    description: 'Adidas teams up with The Simpsons to release a sneaker in collaboration with Ned Flanders.  The color scheme matches the clothes Ned wears in the Simpsons show.',
    category_id: '3',
    image_name: 'nedflandersshoes.jpg',
    user_id: 1,
},
{
    title: 'Tom Brady Does It Again',
    description: 'Tom Brady continues to amaze in his 22nd season.  He led the league in TD passes and yardage at the age of 44.',
    category_id: '1',
    image_name: 'tombrady.jpg',
    user_id: 3,
},
{
    title: 'Jetson has created Flying car that doesnt require a pilot`s license',
    description: 'Swedish startup Jetson has designed a personal electric aerial vehicle that doesn`t require a pilot`s license to operate.',
    category_id: '5',
    image_name: '10-jetson-car.png',
    user_id: 4,
},
{
    title: ' YEEZY 450 Cinder" Revealed ',
    description: 'Following the recent release of the YEEZY 450 RESIN  another model joining the family this coming Spring while introducing a new design element - introducing the YEEZY 450 CINDER.',
    category_id: '3',
    image_name: '11-cinder-yeezy.png',
    user_id: 1,
},
{
    title: 'Upland raises $18M at $300M valuation for NFT-based virtual real estate game',
    description: 'Upland has raised $18 million at a $300 million valuation for its nonfungible token (NFT) virtual real estate game, which is kind of like a real world version of Monopoly.',
    category_id: '6',
    image_name: '12-upland-crypto.png',
    user_id: 3,
},
{
    title: 'A food starup to watch: Redefine Meat',
    description: 'With people craving a delicious meat alternative, it is no wonder these startups are popping up. However, no matter how many others exist, Redefine Meat stands out.',
    category_id: '4',
    image_name: '13-redefine-meat.png',
    user_id: 2,
}];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;