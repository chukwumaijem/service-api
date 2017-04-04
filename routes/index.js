const routes = require('express').Router();
const syncBook = require('./syncbook');

routes.get('/', (req, res) => {
  res.send({ success: 'Welcome to Anselm\'s service API system.' });
});

routes.use('/sync-book', syncBook);

module.exports = routes;