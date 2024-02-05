import React from 'react'
import './css/LoginSignUp.css'
function LoginSignUp() {
  return (
    <div className='loginSignUp'>
      <div className='loginSignUp-container'>
        <h1>Sign Up</h1>
        <div className='loginSignUp-fields'>
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginSignUp-login'>
          Already have an account? <span>Login here</span>
        </p>
        <div className='loginSignUp-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
