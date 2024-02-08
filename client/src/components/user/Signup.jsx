import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const navigate = useNavigate();
  
    const navigateLogin = () => {
      navigate('/login')
    }
  return (
    <>
    <div className='signup'>
    <div className='login-form'>
          <h2>Signup</h2>
          <form>
            <div>
              <label>Username</label>
              <input type='text' />
            </div>
            <div>
              <label>Email</label>
              <input type='email' />
            </div>
            <div>
              <label>Password</label>
              <input type='password'/>
            </div>
            <div>
              <button>Login</button>
            </div>
            <p>Already have an account<span onClick={navigateLogin}>Login</span></p>
          </form>
    </div>
    </div>
    </>
  )
}
