const sequelize = require('../config/connection');
const seedCategories = require('./categoryData');
const seedHypeData = require('./hypeData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategories();

  await seedHypeData();

  process.exit(0);
};

seedAll();
