'use strict';

module.exports = function (app) {
  const userHandlers = require('../controllers/userController.js');
  
  //  Routes
  app.route('/profile').get(userHandlers.profile);
  app.route('/user/register').post(userHandlers.register);
  app.route('/user/update').post(userHandlers.update);
  app.route('/user/delete').post(userHandlers.delete);
  app.route('/user/sign_in').post(userHandlers.sign_in);
}; 