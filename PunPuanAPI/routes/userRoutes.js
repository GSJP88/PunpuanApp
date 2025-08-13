const userController = require('../controllers/userController');

module.exports = (app) => {
  app.get('/api/users', userController.getUsers);
  app.get('/api/users/:id', userController.getUserById);
  app.post('/api/users', userController.createUser);
  app.put('/api/users/:id', userController.updateUser);
  app.delete('/api/users/:id', userController.deleteUser);
  app.post('/api/register', userController.registerUser);
  app.put('/api/profile/update', userController.updateUserData);
  app.get('/api/profile', userController.getProfileData);
  app.get('/api/profile/:userId', userController.getProfileByUserId);

};