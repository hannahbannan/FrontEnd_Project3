import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
const Footer = ()=> {

    return (
        <footer>
            <p>© 2020 COVID - 18+ | <Link to='/about'>About Us </Link> | <Link to="/CovidTips">Covid-19 Tips</Link><a href="https://www.freepik.com/free-photos-vectors/heart"> | Heart Vector Created By Freepik</a></p>
            
        </footer>
    )
}
export default Footer