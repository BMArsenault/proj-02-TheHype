const { Post } = require('../models');
const postdata = [
    {
        title: 'Underwater Volcano Erupts',
        description: 'A volcano erupts underwater near New Zealand causing panic of a possible Tsunami',
        category_id: 2,
        image_name: 'Screenshot 2022-01-13 193423.png',
        user_id: 2,
    },
    {
        title: 'BMW Color Changing Paint',
        description: 'BMW releases a car with paint color that changes.  This may be the new trend in car purchasing but some people are saying it may not go over well with the Motor Vehicles Department.',
        category_id: 5,
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
        category_id: 1,
        image_name: 'Screenshot 2022-01-13 193423.png',
        user_id: 3,
    },
    {
        title: 'Jetson has created Flying car that doesnt require a pilot`s license',
        description: 'Swedish startup Jetson has designed a personal electric aerial vehicle that doesn`t require a pilot`s license to operate.  A compact, futuristic-looking flying car that has a top speed of 63 miles per hour and eight electric motors that collectively generate 102 horsepower. The aluminum and carbon fiber vehicle, which is controlled via a three-axis joystick, takes off vertically and can run for a continual 20 minutes. It features safety precautions such as emergency controls, a ballistic parachute and the ability to still fly with the loss of one motor. ',
        category_id: 5,
        image_name: '10-ietson-car.png',
        user_id: 4,
    },
    {
        title: ' YEEZY 450 Cinder" Revealed ',
        description: 'Following the recent release of the YEEZY 450 RESIN  another model joining the family this coming Spring while introducing a new design element - introducing the YEEZY 450 CINDER The YEEZY 450 Cinder features a clay brown sock like primeknit upper which is mated to the typical exoskeleton esque EVA foam sole design found on other YEEZY 450 models, forgoing the BOOST cushioning that is found on various YEEZY models for a foam based cushioning solution instead. Also like other YEEZY 450 models, the Cinder features an infinity loop lacing system.',
        category_id: 3,
        image_name: '11-cinder-yeezy.png',
        user_id: 1,
    },
    {
        title: 'Upland raises $18M at $300M valuation for NFT-based virtual real estate game',
        description: 'Upland has raised $18 million at a $300 million valuation for its nonfungible token (NFT) virtual real estate game, which is kind of like a real world version of Monopoly. NFTs use the transparency and security of the digital ledger of blockchain to authenticate digital items, and in this case, the NFTs authenticate ownership of a property, like the digital version of the Empire State Building. And the company has a $300 million valuation even though it is only available in 13 cities in the U.S. so far.',
        category_id: 6,
        image_name: '12-upland-crypto.png',
        user_id: 3,
    },
    {
        title: 'A food starup to watch: Redefine Meat',
        description: 'With people craving a delicious meat alternative, it is no wonder these startups are popping up. However, no matter how many others exist, Redefine Meat stands out. Why? Because they use 3D printing when making their products. It might sound like a gimmick at first.  But it is far more than that. Their goal is to make steak so perfect that you cannot tell the difference between the plant-based meat and the real thing. You can currently get: Ground Beef, Burgers, Kababs, Cigars, Sausage',
        category_id: 4,
        image_name: '13-redefine-meat.png',
        user_id: 2,
    },
];
const seedPosts = () => Post.bulkCreate(postdata);
module.exports = seedPosts;