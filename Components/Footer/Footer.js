import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import insta_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
    
        <div className='footer-logo'>
            <img src={footer_logo} alt=''/>
            <p>SHOPPER</p>
        </div>

        <ul className='footer-links'>
            <li>COMPANY</li>
            <li>PRODUCTS</li>
            <li>OFFICES</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
        
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={insta_icon}></img>
            </div>
            <div className='footer-icons-container'>
                <img src={pinterest_icon}></img>
            </div>
            <div className='footer-icons-container'>
                <img src={whatsapp_icon}></img>
            </div>
        </div>

        <div className='footer-copyright'>
            <p>Copyright @ 2023 - all Right Reserved.</p>
        </div>


    </div>
  )
}

export default Footer