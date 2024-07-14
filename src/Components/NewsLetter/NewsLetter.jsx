import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On YourEmail</h1>
        <p>Suscribe to our newsletter and stay undates</p>
        <div>
            <input type="email" placeholder='Your Email' />
            <button>Subsribe</button>
        </div>

    </div>
  )
}

export default NewsLetter