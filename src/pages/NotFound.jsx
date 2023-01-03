import React from 'react'
import '../styles/NotFound.scss'

export default function NotFound() {
  return (
    <div className='main-notfound'>
        <div className="box-notfound">
          <h1>Not Found, error 404</h1>
          <button className='primary-button login-button'>
            Back to Home
          </button>
        </div>
    </div>
  )
}
