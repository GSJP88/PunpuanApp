// Updated StepWizard.jsx with SignContract merged into Step 2

import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignatureCanvas from 'react-signature-canvas';
import '../Styles/stepWizard.css';
import qrImage from "../assets/QRCode.png"
import ScrollToTop from '../components/scrollToTop/ScrollToTop';


const StepWizard = () => {
  const [step, setStep] = useState(1);
  const [tenantName, setTenantName] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [proof, setProof] = useState(null);
  const [adminAccepted, setAdminAccepted] = useState(null);

  // Signature related
  const sigPad = useRef(null);
  const [signatureURL, setSignatureURL] = useState(null);

  const navigate = useNavigate();

  const steps = [
    { title: 'Verification' },
    { title: 'Agreement' },
    { title: 'Payment' },
    { title: 'Admin Verification' },
  ];

  const handleNext = () => {
    if (step === 4 && adminAccepted === false) {
      setStep(3);
    } else {
      setStep(step + 1);
    }
  };

  const handleProofUpload = (e) => {
    setProof(e.target.files[0]);
  };

  const clearSignature = () => {
    sigPad.current.clear();
    setSignatureURL(null);
  };

  const handleAgreementSubmit = () => {
    if (!agreed) {
      alert('Please read and agree to the conditions.');
      return;
    }
    if (!tenantName.trim()) {
      alert('Please enter your full name');
      return;
    }
    if (sigPad.current.isEmpty()) {
      alert('Please provide your signature');
      return;
    }

    const signatureData = sigPad.current.getTrimmedCanvas().toDataURL('image/png');
    setSignatureURL(signatureData);
    handleNext();
  };

  return (
    <div className="wizard-container box_container container">
        <ScrollToTop/>
      <div className="step-indicator">
        {steps.map((s, index) => (
          <div
            className={`step-item ${step === index + 1 ? 'active' : ''} ${step > index + 1 ? 'completed' : ''}`}
            key={index}
          >
            <div className="step-circle">{index + 1}</div>
            <p className="step-title">{s.title}</p>
            {index < steps.length - 1 && <div className="step-line"></div>}
          </div>
        ))}
      </div>

      <div className="wizard-step">
        <h2>Step {step}</h2>

        {step === 1 && (
          <div>
            <p className='first-step-text'>Waiting for landlord to verify your request...</p>
            <div className="next-btn-wrapper">
                <button className="next-button medium-button" onClick={handleNext}>Simulate Accept</button>
            </div>
          </div>
        )}

        {step === 2 && (
            <div>
              <div className="sign-contract-container">
                <div className="sign-contract-left">
                  <labe className='label'>Conditions</labe>
                  <div className="sign-conditions-section">
                    <h2>Tenant Conditions</h2>
                    <ol>
                      <li><strong>Rent Payment</strong><ul><li>Must pay the agreed monthly rent on or before the due date.</li><li>Payment method: cash, bank transfer, or mobile app.</li></ul></li>
                      <li><strong>Security Deposit</strong><ul><li>A deposit (1 month's rent) paid before moving in.</li><li>Refunded if no damage or bills.</li></ul></li>
                      <li><strong>Utility Bills</strong><ul><li>Tenant pays water, electricity, internet, etc.</li></ul></li>
                      <li><strong>Property Care</strong><ul><li>Keep property clean, report damage.</li><li>No damage beyond normal wear.</li></ul></li>
                      <li><strong>Restrictions</strong><ul><li>No smoking/pets/illegal activities/loud noise.</li></ul></li>
                      <li><strong>Guests & Subleasing</strong><ul><li>No sublease without permission.</li><li>Limit overnight guests.</li></ul></li>
                      <li><strong>End of Lease</strong><ul><li>30 days notice before moving out.</li><li>Clean and return keys.</li></ul></li>
                    </ol>
                    <h2>Landlord Conditions</h2>
                    <ol>
                      <li><strong>Property Availability</strong><ul><li>Clean and safe property.</li></ul></li>
                      <li><strong>Deposit Handling</strong><ul><li>Return deposit in 7–30 days.</li></ul></li>
                      <li><strong>Maintenance</strong><ul><li>Fix major issues in reasonable time.</li></ul></li>
                      <li><strong>Privacy</strong><ul><li>24hr notice before entry.</li></ul></li>
                      <li><strong>Rent Collection</strong><ul><li>Clear payment terms.</li></ul></li>
                      <li><strong>Lease Termination</strong><ul><li>30-day notice required.</li></ul></li>
                    </ol>
                  </div>
                  <div className="sign-checkbox-container">
                    <input type="checkbox" id="read-conditions" checked={agreed} onChange={() => setAgreed(!agreed)} />
                    <label htmlFor="read-conditions"> I've read all conditions</label>
                  </div>
                </div>

                <div className="sign-contract-wrapper">
                  <label className='label'>Fullname</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    className="name-input input_app"
                  />

                    <div className="sign-contract-text">
                      <p>
                        By signing this agreement, you agree to the terms and conditions
                        outlined in the contract. This digital signature is legally binding.
                      </p>
                    </div>

                  <label className='label'>Signature</label>
                  <SignatureCanvas
                    penColor="black"
                    canvasProps={{ className: 'signature-canvas textarea_app' }}
                    ref={sigPad}
                  />
                <div className="sign-clear-button">
                    <button onClick={clearSignature} className='small-button'>Clear</button>
                </div>
                </div>
              </div>
                <div className="sign-submit-button">
                  <button
                    onClick={handleNext}
                    className='medium-button'
                    disabled={!agreed}
                  >
                    Next Step
                  </button>
                </div>
            </div>
        )}

        {step === 3 && (
          <div className='payment-step'>
            <p>Please scan the QR code or transfer to the account below.</p>
            <div className="qr-box">
              <img src={qrImage} alt="QR Code" />
              <p>Account Number: 123-456-7890</p>
            </div>
            <div className="upload-wrapper">
              <label>Upload Proof of Payment:</label>
              <input
                id="proof-upload"
                className="upload-box"
                type="file"
                onChange={handleProofUpload}
              />
            </div>
            <div className="next-btn-wrapper">
                <button
                className='next-button medium-button'
                  disabled={!proof}
                  onClick={() => {
                    setStep(4);
                    setTimeout(() => {
                      const accepted = window.confirm("Admin: Accept this proof?");
                      setAdminAccepted(accepted);
                    }, 1000);
                  }}
                >
                  Submit Payment
                </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            {adminAccepted === null && <p>Waiting for admin to verify payment...</p>}
            {adminAccepted === true && (
              <div className="success-popup-wrapper">
                <div className="success-popup">
                    <p>✅ Payment Verified Successfully!</p>
                </div>
                <div className="next-btn-wrapper">
                  <button className="next-button medium-button" onClick={() => navigate('/tenantDashboard')}>
                    Let Start !
                  </button>
                </div>
              </div>
            )}
            {adminAccepted === false && (
              <div className='next-btn-wrapper'>
                <p>❌ Payment Rejected. Please try again.</p>
                <button className='next-button medium-button' onClick={handleNext}>Back to Payment</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StepWizard;
