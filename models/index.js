// import all models
const Post = require('./Post');
const User = require('./User');
const Ratings = require('./Ratings');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.belongsToMany(Post, {
    through: Ratings,
    as: 'rated_posts',

    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
    through: Ratings,
    as: 'rated_posts',
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

Ratings.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Ratings.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

User.hasMany(Ratings, {
    foreignKey: 'user_id'
});

Post.hasMany(Ratings, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Ratings, Comment };