import React, { useContext } from 'react'
import {Button} from 'react-bootstrap'
import { TransactionContext } from '../Context/TransactionContext'
import './Header.css'
const Header = () => {
  const[connectWallet,currentAccount]=useContext(TransactionContext)
  return (
    <div className='header'>
        <span className='btn'>

        <Button variant="outline-secondary" className='swapbtn'>Swap</Button>
        
        {' '}
        

      {
        !currentAccount &&
       <Button variant='success' className='connectbtn' onClick={connectWallet}>Connect</Button>
      } 
       {currentAccount &&
       <div className='wallet'>
         Connected wallet: {currentAccount}
        </div>
       } 
        </span>
    </div>
  )
}

export default Header