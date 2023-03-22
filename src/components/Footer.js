import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <LinkedInIcon />
            <FacebookIcon />
        </div>
        <p>&copy; 2023 modipizzeria.com</p>
    </div>
  )
}

export default Footer
