import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import './signContact.css';
import Agreement from '../../assets/agreement.jpg';

const SignContract = () => {
  const sigPad = useRef(null);
  const [name, setName] = useState('');
  const [signed, setSigned] = useState(false);
  const [signatureURL, setSignatureURL] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const clearSignature = () => {
    sigPad.current.clear();
    setSignatureURL(null);
  };

  const handleSubmit = () => {
    if (!isChecked) {
      alert('Please read and agree to the conditions.');
      return;
    }
    if (!name.trim()) {
      alert('Please enter your full name');
      return;
    }
    if (sigPad.current.isEmpty()) {
      alert('Please provide your signature');
      return;
    }

    const signatureData = sigPad.current.getTrimmedCanvas().toDataURL('image/png');
    setSignatureURL(signatureData);
    setSigned(true);

    console.log('Signed by:', name);
    console.log('Signature image:', signatureData);
  };

  return (
    <div className="contract-container box_container container">
      <div className="contract-left">
        <p className='label'>Conditions</p>
        {/* Conditions Section */}
        <div className="conditions-section">
          <h2>Tenant Conditions</h2>
          <ol>
            <li>
              <strong>Rent Payment</strong>
              <ul>
                <li>Must pay the agreed monthly rent on or before the due date (usually the 1st of each month).</li>
                <li>Payment method: cash, bank transfer, or mobile app as agreed with the landlord.</li>
              </ul>
            </li>
            <li>
              <strong>Security Deposit</strong>
              <ul>
                <li>A security deposit (usually 1 month's rent) must be paid before moving in.</li>
                <li>Deposit is refundable at the end of the lease if there are no damages or unpaid bills.</li>
              </ul>
            </li>
            <li>
              <strong>Utility Bills</strong>
              <ul>
                <li>Responsible for paying water, electricity, internet, and other services (unless otherwise stated).</li>
              </ul>
            </li>
            <li>
              <strong>Property Care</strong>
              <ul>
                <li>Must keep the property clean and in good condition.</li>
                <li>Report any damage immediately.</li>
                <li>Must not cause damage beyond normal wear and tear.</li>
              </ul>
            </li>
            <li>
              <strong>Restrictions</strong>
              <ul>
                <li>No smoking inside the property (if stated).</li>
                <li>No pets allowed (unless agreed).</li>
                <li>No illegal activities allowed on the property.</li>
                <li>Must not make loud noise or disturb neighbors.</li>
              </ul>
            </li>
            <li>
              <strong>Guests and Subleasing</strong>
              <ul>
                <li>Cannot sublease the room or apartment to others without landlord's permission.</li>
                <li>Overnight guests must be limited and respectful.</li>
              </ul>
            </li>
            <li>
              <strong>End of Lease</strong>
              <ul>
                <li>Must inform the landlord at least 30 days before moving out.</li>
                <li>Leave the room clean and in good condition.</li>
                <li>Return the keys and settle any outstanding bills.</li>
              </ul>
            </li>
          </ol>

          <h2>Landlord Conditions</h2>
          <ol>
            <li>
              <strong>Property Availability</strong>
              <ul>
                <li>Must provide the property in clean and livable condition.</li>
                <li>Ensure the property is free from serious safety issues (e.g. leaks, faulty wiring, broken locks).</li>
              </ul>
            </li>
            <li>
              <strong>Deposit Handling</strong>
              <ul>
                <li>Collect security deposit and return it within a reasonable time (usually 7–30 days after lease ends).</li>
                <li>May deduct from deposit only for damages or unpaid bills, with clear explanation.</li>
              </ul>
            </li>
            <li>
              <strong>Maintenance and Repairs</strong>
              <ul>
                <li>Responsible for major repairs (e.g. roof leaks, plumbing problems).</li>
                <li>Should respond to tenant complaints or repair requests within a reasonable time.</li>
              </ul>
            </li>
            <li>
              <strong>Respect Tenant Privacy</strong>
              <ul>
                <li>Cannot enter the tenant's room without notice, unless in case of emergency.</li>
                <li>Should notify at least 24 hours before coming to inspect or repair the property.</li>
              </ul>
            </li>
            <li>
              <strong>Rent Collection</strong>
              <ul>
                <li>Must clearly communicate how and when rent should be paid.</li>
                <li>Cannot increase rent before the lease ends, unless otherwise stated.</li>
              </ul>
            </li>
            <li>
              <strong>Lease Termination</strong>
              <ul>
                <li>Should give advance notice (30 days or as agreed) if they want the tenant to move out.</li>
                <li>Cannot evict without valid reason or without following legal process.</li>
              </ul>
            </li>
          </ol>
        </div>

        {/* Checkbox */}
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="read-conditions"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label htmlFor="read-conditions"> I've read all conditions</label>
        </div>
      </div>

      <div className="contract-wrapper">
        <p className='label'>Fullname</p>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="name-input input_app"
        />

        <div className="contract-text">
          <p>
            By signing this agreement, you agree to the terms and conditions
            outlined in the contract. This digital signature is legally binding.
          </p>
        </div>

        <p className='label'>Sign below</p>
        <SignatureCanvas
          penColor="black"
          canvasProps={{ className: 'signature-canvas input_app' }}
          ref={sigPad}
        />
        <div className="clear-button">
          <button onClick={clearSignature} className='small-button'>Clear</button>
        </div>
        <div className="submit-button">
          <button
            onClick={handleSubmit}
            className='medium-button'
            disabled={!isChecked}  // Button disabled if checkbox is not ticked
          >
            Submit
          </button>
        </div>

        {signed && signatureURL && (
          <div className="signed-preview">
            <h4>Signature Preview</h4>
            <p>Name: {name}</p>
            <img src={signatureURL} alt="Signature" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SignContract;
