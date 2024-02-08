import React from 'react';
import './User.scss';
import notepng from '../../assets/notes.png';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
  const navigate = useNavigate();
  
  const navigateSignup = () => {
    navigate('/signup')
  }
  return (
    <>
    <div className='login'>
        <div>
            <h2>Organize, Prioritize then Achieve</h2>
            <img src={notepng}/>
        </div>
        <div className='login-form'>
          <h2>Login</h2>
          <form>
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
            <p>Don't have account<span onClick={navigateSignup}>Signup</span></p>
          </form>
        </div>
    </div>
    </>
  )
}
