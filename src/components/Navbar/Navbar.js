import React from 'react'
import logo from '../../images/logo.jpg'

export const Navbar = () => {
  return (
    <div>
        <header>
            <a href='#'>
                <div className='logo'>
                    <img src={logo} alt='logo' width="150"/>
                </div>
            </a>
            <ul>
                <li>
                    <a href='#'>Inicio</a>
                </li>
                <li>
                    <a href='#'>Producto</a>
                </li>
            </ul>
            <div className='cart'>
                <box-icon name='cart'></box-icon>
                <span className='item_total'>0</span>
            </div>
        </header>
    </div>
  )
}
