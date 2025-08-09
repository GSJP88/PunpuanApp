const rentalAgreementController = require('../controllers/rentalAgreementController');

module.exports = (app) => {
  app.get('/api/rental-agreements', rentalAgreementController.getRentalAgreements);
  app.get('/api/rental-agreements/:id', rentalAgreementController.getRentalAgreementById);
  app.post('/api/rental-agreements', rentalAgreementController.createRentalAgreement);
  app.put('/api/rental-agreements/:id', rentalAgreementController.updateRentalAgreement);
  app.delete('/api/rental-agreements/:id', rentalAgreementController.deleteRentalAgreement);
};