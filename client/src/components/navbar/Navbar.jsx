import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.scss'
export const Navbar = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/')
  }
  const handleClick = () => {
    navigate('/login')
  }
  return (
    <>
      <div className='navbar'> 
        <span onClick={navigateHome}>Todo</span>
        <div onClick={handleClick}>
        <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </>
  )
}
