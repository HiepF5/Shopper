import React, { useState } from 'react'
import './Navbar.css'
import logo from '@assets/img/logo.png'
import cart_icon from '@assets/img/cart_icon.png'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  const [menu, setMenu] = useState('shop')

  return (
    <>
      <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt='' />
          <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
          <li
            onClick={() => {
              setMenu('shop')
            }}
          >
            <Link style={{ textDecoration: 'none' }} to='/'>
              Shop
            </Link>{' '}
            {menu === 'shop' ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu('men')
            }}
          >
            <Link style={{ textDecoration: 'none' }} to='/mens'>
              Men
            </Link>{' '}
            {menu === 'men' ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu('women')
            }}
          >
            <Link style={{ textDecoration: 'none' }} to='/womens'>
              Women
            </Link>{' '}
            {menu === 'women' ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu('kids')
            }}
          >
            <Link style={{ textDecoration: 'none' }} to='/kids'>
              Kids
            </Link>{' '}
            {menu === 'kids' ? <hr /> : <></>}
          </li>
        </ul>
        <div className='nav-login-cart'>
          <Link style={{ textDecoration: 'none' }} to='/login'>
            <button>Login</button>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/cart'>
            <img src={cart_icon} alt='' />
          </Link>
          <div className='nav-cart-count'>0</div>
        </div>
      </div>
    </>
  )
}

export default Navbar
