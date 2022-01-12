const router = require('express').Router();
const { Trends, Painting } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all trends for homepage
router.get('/', async (req, res) => {
  try {
    const dbTrendsData = await Trends.findAll({
      include: [
        {
          model: Painting,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const trending = dbTrendsData.map((trends) =>
      trends.get({ plain: true })
    );

    res.render('homepage', {
      trending,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one trend
// Use the custom middleware before allowing the user to access the trend
router.get('/trends/:id', withAuth, async (req, res) => {
  try {
    const dbTrendsData = await Trends.findByPk(req.params.id, {
      include: [
        {
          model: Painting,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const trend = dbTrendsData.get({ plain: true });
    res.render('trend', { gallery, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
// Use the custom middleware before allowing the user to access the painting
router.get('/painting/:id', withAuth, async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });

    res.render('painting', { painting, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
