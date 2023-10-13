import React from 'react';
import { useTheme } from './ThemeContext';
import Switch from './Switch';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <div className={`navbar ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'}`} >
        <div className='navbar-left' >
          <img className='logo' src="/images/image 4.png" alt="logo" />
        </div>
        <div className='navbar-right'>
        <Switch></Switch>
        </div>
      </div>
    </div>
  );
}
