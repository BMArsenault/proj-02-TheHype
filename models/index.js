// import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');
const Category = require('./Category');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
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

Post.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
});

Category.hasMany(Post, {
    foreignKey: 'post_id'
});


module.exports = { User, Post, Comment, Category };