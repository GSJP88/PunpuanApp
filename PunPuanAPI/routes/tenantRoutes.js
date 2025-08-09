const tenantController = require('../controllers/tenantController');

module.exports = (app) => {
  app.get('/api/tenants', tenantController.getTenants);
  app.get('/api/tenants/:id', tenantController.getTenantById);
  app.post('/api/tenants', tenantController.createTenant);
  app.put('/api/tenants/:id', tenantController.updateTenant);
  app.delete('/api/tenants/:id', tenantController.deleteTenant);
};