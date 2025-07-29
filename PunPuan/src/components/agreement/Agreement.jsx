import React from 'react';
import '../../Styles/agreement.css';

const Agreement = () => {
  const property = {
    landlord: 'Mr. Somchai Thammavong',
    landlordPhone: '020 2222 3333',
    tenant: 'Miss Alina Khamphoumy',
    tenantPhone: '020 4444 5555',
    location: 'Ban Nongbone, Sisattanak District, Vientiane',
    type: 'Apartment',
    rent: 350,
    deposit: 350,
    leaseStart: 'July 1, 2025',
    leaseEnd: 'June 30, 2026',
    date: 'June 20, 2025',
  };

  return (
    <div className="agreement-container">
      <h1 className="agreement-title">Rental Agreement</h1>
      <p className="agreement-date">Date: {property.date}</p>

      <div className="section">
        <h2 className="section-title">Parties Involved</h2>
        <p><strong>Landlord:</strong> {property.landlord} (📞 {property.landlordPhone})</p>
        <p><strong>Tenant:</strong> {property.tenant} (📞 {property.tenantPhone})</p>
      </div>

      <div className="section">
        <h2 className="section-title">Property Details</h2>
        <p><strong>Type:</strong> {property.type}</p>
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Monthly Rent:</strong> ${property.rent}</p>
        <p><strong>Security Deposit:</strong> ${property.deposit} (Refundable)</p>
        <p><strong>Lease Term:</strong> {property.leaseStart} to {property.leaseEnd}</p>
      </div>

      <div className="section">
        <h2 className="section-title">Terms & Conditions</h2>
        <ul className="terms-list">
          <li>Rent is due on the 1st of every month.</li>
          <li>Tenant is responsible for electricity and water bills.</li>
          <li>No pets allowed on the property.</li>
          <li>Subleasing is not permitted.</li>
          <li>Tenant must report and repair any damages caused.</li>
        </ul>
      </div>

      <div className="section">
        <h2 className="section-title">Agreement Confirmation</h2>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" /> I, the <strong>Tenant</strong>, agree to the terms of this rental agreement.
          </label>
          <label>
            <input type="checkbox" /> I, the <strong>Landlord</strong>, agree to rent the above property under these conditions.
          </label>
        </div>
      </div>

      <div className="button-group">
        <button className="agree-button">Agree & Start Lease</button>
        <button className="download-button">Download PDF</button>
      </div>
    </div>
  );
};

export default Agreement;
