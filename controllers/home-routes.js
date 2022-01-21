const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Category } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for homepage
router.get('/', withAuth, (req, res) => {
    console.log('======================');
    Post.findAll({
            attributes: [
                'id',
                'title',
                'description',
                'image_name',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Category,
                    attributes: ['category_name']
                },

            ]
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            // console.log(posts);
            res.render('homepage', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

// get single post
router.get('/post/:id', withAuth, (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'title',
                'description',
                'image_name',
                'created_at',
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Category,
                    attributes: ['category_name']
                },
            ]
        })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            const post = dbPostData.get({ plain: true });

            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
})

router.get('/trends', withAuth, (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'description',
            'image_name',
            'created_at'
        ],
        order: [['created_at', 'DESC']],
        include: [{
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Category,
                attributes: ['category_name']
            },

        ],

    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        // console.log(posts);
        res.render('trends', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.get('/sports', withAuth, (req, res) => {
    Post.findAll({
            where: {
                category_id: '1'
            },
            attributes: [
                'id',
                'title',
                'description',
                'image_name',
                'created_at',
            ],
            order: [['created_at', 'DESC']],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Category,
                    attributes: ['category_name']
                },
            ]
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            // console.log(posts);
            res.render('sports', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/world', withAuth, (req, res) => {
    Post.findAll({
            where: {
                category_id: '2'
            },
            attributes: [
                'id',
                'title',
                'description',
                'image_name',
                'created_at',
            ],
            order: [['created_at', 'DESC']],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Category,
                    attributes: ['category_name']
                },
            ]
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            // console.log(posts);
            res.render('world', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/streetwear', withAuth, (req, res) => {
    Post.findAll({
            where: {
                category_id: '3'
            },
            attributes: [
                'id',
                'title',
                'description',
                'image_name',
                'created_at',
            ],
            order: [['created_at', 'DESC']],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Category,
                    attributes: ['category_name']
                },
            ]
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            // console.log(posts);
            res.render('streetwear', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.get('/foodanddrink', withAuth, (req, res) => {
    Post.findAll({
            where: {
                category_id: '4'
            },
            attributes: [
                'id',
                'title',
                'description',
                'image_name',
                'created_at',
            ],
            order: [['created_at', 'DESC']],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Category,
                    attributes: ['category_name']
                },
            ]
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            // console.log(posts);
            res.render('foodanddrink', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.get('/cars', withAuth, (req, res) => {
    Post.findAll({
            where: {
                category_id: '5'
            },
            attributes: [
                'id',
                'title',
                'description',
                'image_name',
                'created_at',
            ],
            order: [['created_at', 'DESC']],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Category,
                    attributes: ['category_name']
                },
            ]
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            // console.log(posts);
            res.render('cars', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.get('/crypto', withAuth, (req, res) => {
    Post.findAll({
            where: {
                category_id: '6'
            },
            attributes: [
                'id',
                'title',
                'description',
                'image_name',
                'created_at',
            ],
            order: [['created_at', 'DESC']],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Category,
                    attributes: ['category_name']
                },
            ]
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            // console.log(posts);
            res.render('crypto', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.get('/about-us', (req, res) => {
    res.render('about-us', {loggedIn: req.session.loggedIn});
})

router.get('/contact', (req, res) => {
    res.render('contact', {loggedIn: req.session.loggedIn});
})

module.exports = router;