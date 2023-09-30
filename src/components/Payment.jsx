import React, { useState } from 'react';

function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    // Handle payment logic (e.g., send payment data to a payment gateway)
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiry);
    console.log('CVV:', cvv);
  };

  return (
    <div>
      <h2>Payment Information</h2>
      <form onSubmit={handlePayment}>
        <label>
          Card Number:
          <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
        </label>
        <br />
        <label>
          Expiry Date:
          <input type="text" value={expiry} onChange={(e) => setExpiry(e.target.value)} required />
        </label>
        <br />
        <label>
          CVV:
          <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;
