import React from 'react';
import './User.scss';
import notepng from '../../assets/notes.png';
export const Login = () => {
  return (
    <>
    <div className='login'>
        <div>
            <h2>Organize, Prioritize then Achieve</h2>
            <img src={notepng}/>
        </div>
        <div className='login-form'>
            <h3>Welcome!</h3>
            <div>
              <label>Email:</label>
              <input type='email' />
            </div>
            <div>
              <label>Password:</label>
              <input type='password' />
            </div>
            <div>
              <button>Login</button>
            </div>
            <div>
              <p>Don't have account? Signup</p>
            </div>
        </div>
    </div>
    </>
  )
}
