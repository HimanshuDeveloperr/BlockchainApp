import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { TransactionContext } from '../Context/TransactionContext';

import './Home.css';

const Home = () => {
  const [connectWallet, currentAccount, formData, setFormData, handleChange, sendTransactions] = useContext(
    TransactionContext
  );

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();
    if (!addressTo || !amount || !keyword || !message) return;

    sendTransactions();
  };

  return (
    <div className='cardmimic'>
      <span>
        <p className='para'>
          <i>SEND CRYPTO ACROSS THE WORLD</i>
        </p>
      </span>
      <form>
        <input
          placeholder='Address To'
          name='addressTo'
          type='text'
          value={formData.addressTo}
          className='inputstyle'
          onChange={(e) => handleChange(e, 'addressTo')}
        />
        <input
          placeholder='Amount (ETH)'
          name='amount'
          type='number'
          className='inputstyle'

          value={formData.amount}
          onChange={(e) => handleChange(e, 'amount')}
        />
        <input
          placeholder='Keyword (Gif)'
          name='keyword'
          type='text'
          className='inputstyle'

          value={formData.keyword}
          onChange={(e) => handleChange(e, 'keyword')}
        />
        <input
          placeholder='Enter Message'
          name='message'
          type='text'
          value={formData.message}
          className='inputstyle'

          onChange={(e) => handleChange(e, 'message')}
        />
        {currentAccount ? (
          <div>
            <Button variant='info' className='m-2' onClick={handleSubmit}>
              <i>Send Now</i>
            </Button>
          </div>
        ) : (
          <div>
            <Button variant='info' className='m-2' onClick={connectWallet}>
              <i>Connect Wallet</i>
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Home;
