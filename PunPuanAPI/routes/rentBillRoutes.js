const rentBillController = require('../controllers/rentBillController');

module.exports = (app) => {
  app.get('/api/rent-bills', rentBillController.getRentBills);
  app.get('/api/rent-bills/:id', rentBillController.getRentBillById);
  app.post('/api/rent-bills', rentBillController.createRentBill);
  app.put('/api/rent-bills/:id', rentBillController.updateRentBill);
  app.delete('/api/rent-bills/:id', rentBillController.deleteRentBill);
};