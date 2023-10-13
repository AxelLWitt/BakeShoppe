import React from 'react'
import { useTheme } from './ThemeContext'

export default function Footer() {
  const {theme} = useTheme()
  return (
    <div>
      <div className={`footer ${theme === 'dark' ? 'footer-dark' : 'footer-light'}`}>
        <img src="/images/image 7.png" alt="footer image" />
        <ul className={theme === 'dark' ? 'dark-mode' : ''}>
          <li className='About'>About Us</li>
          <li className='Contact'>Contact</li>
          <li className='Careers'>Careers</li>
          <li className='Store'>Store Hours</li>
          <li className='Policy'>Privacy Policy</li>
          <li className='Newsletter'>Newsletter</li>
        </ul>
      </div>
    </div>
  )
}
