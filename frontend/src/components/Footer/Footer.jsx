import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
const Footer = ()=> {

    return (
        <footer>
            <p>© 2020 COVID - 18+ | <Link to='/about'>About Us</Link></p>
        </footer>
    )
}
export default Footer