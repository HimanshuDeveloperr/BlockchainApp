import React from 'react'
import Header from '../Header'
import Home from '../Home'
import './Card.css'
const Cards = () => {
  return (
    <div className='cards'>
        <div>
            <Header/>
        </div>
        {/* <div className='para'>
            <p>
                <b>
                    Send Crypto Across The World
                </b>
            </p>
        </div> */}
        <div>
            <Home/>
        </div>
    </div>
  )
}

export default Cards;