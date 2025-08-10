import axios from 'axios';

const API_BASE = 'http://localhost:5000/api'; //URL Backend

// =======================
// User API
// =======================

// Get all users
export const getUsers = () =>
  axios.get(`${API_BASE}/users`).then(res => res.data);

// Get single user by ID
export const getUserById = (id) =>
  axios.get(`${API_BASE}/users/${id}`).then(res => res.data);

// Create new user
export const createUser = (userData) =>
  axios.post(`${API_BASE}/users`, userData).then(res => res.data);

// Update existing user by ID
export const updateUser = (id, userData) =>
  axios.put(`${API_BASE}/users/${id}`, userData).then(res => res.data);

// Delete user by ID
export const deleteUser = (id) =>
  axios.delete(`${API_BASE}/users/${id}`).then(res => res.data);

// =======================
// Tenant API
// =======================

export const getTenants = () =>
  axios.get(`${API_BASE}/tenants`).then(res => res.data);

export const getTenantById = (id) =>
  axios.get(`${API_BASE}/tenants/${id}`).then(res => res.data);

export const createTenant = (tenantData) =>
  axios.post(`${API_BASE}/tenants`, tenantData).then(res => res.data);

export const updateTenant = (id, tenantData) =>
  axios.put(`${API_BASE}/tenants/${id}`, tenantData).then(res => res.data);

export const deleteTenant = (id) =>
  axios.delete(`${API_BASE}/tenants/${id}`).then(res => res.data);

// =======================
// Landlord API
// =======================

export const getLandlords = () =>
  axios.get(`${API_BASE}/landlords`).then(res => res.data);

export const getLandlordById = (id) =>
  axios.get(`${API_BASE}/landlords/${id}`).then(res => res.data);

export const createLandlord = (landlordData) =>
  axios.post(`${API_BASE}/landlords`, landlordData).then(res => res.data);

export const updateLandlord = (id, landlordData) =>
  axios.put(`${API_BASE}/landlords/${id}`, landlordData).then(res => res.data);

export const deleteLandlord = (id) =>
  axios.delete(`${API_BASE}/landlords/${id}`).then(res => res.data);

// =======================
// Type API
// =======================

export const getTypes = () =>
  axios.get(`${API_BASE}/types`).then(res => res.data);

export const getTypeById = (id) =>
  axios.get(`${API_BASE}/types/${id}`).then(res => res.data);

export const createType = (typeData) =>
  axios.post(`${API_BASE}/types`, typeData).then(res => res.data);

export const updateType = (id, typeData) =>
  axios.put(`${API_BASE}/types/${id}`, typeData).then(res => res.data);

export const deleteType = (id) =>
  axios.delete(`${API_BASE}/types/${id}`).then(res => res.data);

// =======================
// Room API
// =======================

export const getRooms = () =>
  axios.get(`${API_BASE}/rooms`).then(res => res.data);

export const getRoomById = (id) =>
  axios.get(`${API_BASE}/rooms/${id}`).then(res => res.data);

export const createRoom = (roomData) =>
  axios.post(`${API_BASE}/rooms`, roomData).then(res => res.data);

export const updateRoom = (id, roomData) =>
  axios.put(`${API_BASE}/rooms/${id}`, roomData).then(res => res.data);

export const deleteRoom = (id) =>
  axios.delete(`${API_BASE}/rooms/${id}`).then(res => res.data);

// =======================
// Service Fee API
// =======================

export const getServiceFees = () =>
  axios.get(`${API_BASE}/service-fees`).then(res => res.data);

export const getServiceFeeById = (id) =>
  axios.get(`${API_BASE}/service-fees/${id}`).then(res => res.data);

export const createServiceFee = (feeData) =>
  axios.post(`${API_BASE}/service-fees`, feeData).then(res => res.data);

export const updateServiceFee = (id, feeData) =>
  axios.put(`${API_BASE}/service-fees/${id}`, feeData).then(res => res.data);

export const deleteServiceFee = (id) =>
  axios.delete(`${API_BASE}/service-fees/${id}`).then(res => res.data);

// =======================
// Rent API
// =======================

export const getRents = () =>
  axios.get(`${API_BASE}/rents`).then(res => res.data);

export const getRentById = (id) =>
  axios.get(`${API_BASE}/rents/${id}`).then(res => res.data);

export const createRent = (rentData) =>
  axios.post(`${API_BASE}/rents`, rentData).then(res => res.data);

export const updateRent = (id, rentData) =>
  axios.put(`${API_BASE}/rents/${id}`, rentData).then(res => res.data);

export const deleteRent = (id) =>
  axios.delete(`${API_BASE}/rents/${id}`).then(res => res.data);

// =======================
// Rental Agreement API
// =======================

export const getRentalAgreements = () =>
  axios.get(`${API_BASE}/rental-agreements`).then(res => res.data);

export const getRentalAgreementById = (id) =>
  axios.get(`${API_BASE}/rental-agreements/${id}`).then(res => res.data);

export const createRentalAgreement = (agreementData) =>
  axios.post(`${API_BASE}/rental-agreements`, agreementData).then(res => res.data);

export const updateRentalAgreement = (id, agreementData) =>
  axios.put(`${API_BASE}/rental-agreements/${id}`, agreementData).then(res => res.data);

export const deleteRentalAgreement = (id) =>
  axios.delete(`${API_BASE}/rental-agreements/${id}`).then(res => res.data);

// =======================
// Rental Confirmation API
// =======================

export const getRentalConfirmations = () =>
  axios.get(`${API_BASE}/rental-confirmations`).then(res => res.data);

export const getRentalConfirmationById = (id) =>
  axios.get(`${API_BASE}/rental-confirmations/${id}`).then(res => res.data);

export const createRentalConfirmation = (confirmationData) =>
  axios.post(`${API_BASE}/rental-confirmations`, confirmationData).then(res => res.data);

export const updateRentalConfirmation = (id, confirmationData) =>
  axios.put(`${API_BASE}/rental-confirmations/${id}`, confirmationData).then(res => res.data);

export const deleteRentalConfirmation = (id) =>
  axios.delete(`${API_BASE}/rental-confirmations/${id}`).then(res => res.data);

// =======================
// Rent Bill API
// =======================

export const getRentBills = () =>
  axios.get(`${API_BASE}/rent-bills`).then(res => res.data);

export const getRentBillById = (id) =>
  axios.get(`${API_BASE}/rent-bills/${id}`).then(res => res.data);

export const createRentBill = (billData) =>
  axios.post(`${API_BASE}/rent-bills`, billData).then(res => res.data);

export const updateRentBill = (id, billData) =>
  axios.put(`${API_BASE}/rent-bills/${id}`, billData).then(res => res.data);

export const deleteRentBill = (id) =>
  axios.delete(`${API_BASE}/rent-bills/${id}`).then(res => res.data);

// =======================
// Rent Payment API
// =======================

export const getRentPayments = () =>
  axios.get(`${API_BASE}/rent-payments`).then(res => res.data);

export const getRentPaymentById = (id) =>
  axios.get(`${API_BASE}/rent-payments/${id}`).then(res => res.data);

export const createRentPayment = (paymentData) =>
  axios.post(`${API_BASE}/rent-payments`, paymentData).then(res => res.data);

export const updateRentPayment = (id, paymentData) =>
  axios.put(`${API_BASE}/rent-payments/${id}`, paymentData).then(res => res.data);

export const deleteRentPayment = (id) =>
  axios.delete(`${API_BASE}/rent-payments/${id}`).then(res => res.data);

// =======================
// Service Fee Payment API
// =======================

export const getServiceFeePayments = () =>
  axios.get(`${API_BASE}/service-fee-payments`).then(res => res.data);

export const getServiceFeePaymentById = (id) =>
  axios.get(`${API_BASE}/service-fee-payments/${id}`).then(res => res.data);

export const createServiceFeePayment = (paymentData) =>
  axios.post(`${API_BASE}/service-fee-payments`, paymentData).then(res => res.data);

export const updateServiceFeePayment = (id, paymentData) =>
  axios.put(`${API_BASE}/service-fee-payments/${id}`, paymentData).then(res => res.data);

export const deleteServiceFeePayment = (id) =>
  axios.delete(`${API_BASE}/service-fee-payments/${id}`).then(res => res.data);

//////////// All fuction Path API /////////////

// ฟังก์ชันสมัครสมาชิก
export const registerUser = (userData) => {
  return axios.post(`${API_BASE}/register`, userData).then(res => res.data);
};

// ฟังก์ชันเข้าสู่ระบบ
export const loginUser = (credentials) => {
  return axios.post(`${API_BASE}/login`, credentials).then(res => res.data);
};