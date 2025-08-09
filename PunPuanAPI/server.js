const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Route
require('./routes/userRoutes')(app);
require('./routes/tenantRoutes')(app);
require('./routes/landlordRoutes')(app);
require('./routes/typeRoutes')(app);
require('./routes/roomRoutes')(app);
require('./routes/serviceFeeRoutes')(app);
require('./routes/rentRoutes')(app);
require('./routes/rentalAgreementRoutes')(app);
require('./routes/rentalConfirmationRoutes')(app);
require('./routes/rentBillRoutes')(app);
require('./routes/rentPaymentRoutes')(app);
require('./routes/serviceFeePaymentRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});