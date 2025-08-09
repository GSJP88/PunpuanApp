const roomController = require('../controllers/roomController');

module.exports = (app) => {
  app.get('/api/rooms', roomController.getRooms);
  app.get('/api/rooms/:id', roomController.getRoomById);
  app.post('/api/rooms', roomController.createRoom);
  app.put('/api/rooms/:id', roomController.updateRoom);
  app.delete('/api/rooms/:id', roomController.deleteRoom);
};