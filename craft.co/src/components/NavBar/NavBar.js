import { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import menu from '../../menubar.png'

function NavBar() {
    const [active, setActive] = useState(false)
    return (
        <header>
            <h1 className='company__name'><Link to='/'>Craft</Link></h1>

            <nav>
                <ul className={`outer__nav__links ${active && 'active'}`}>
                    <li className='outer__nav__link'>Product
                        <ul className='inner__nav__links'>
                            <li>Craft Intelligence Portal</li>
                            <li>Craft API</li>
                            <li>Supplier Intelligence Platform</li>
                            <li><Link to='/search'>Company Search (Free)</Link></li>
                        </ul>
                    </li>
                    <li>Solutions
                        <ul className='inner__nav__links' >
                            <li>Craft for Supply Chain</li>
                            <li>Craft for Sales Intelligence</li>
                            <li>Aerospace and Defense</li>
                            <li>Cybersecurity Health Scan</li>
                            <li>Diverse Supplier Spend Report</li>
                            <li>Semiconductor Industry Intelligence</li>
                            <li>ESG Health Scan</li>
                        </ul>
                    </li>
                    <li>Resources
                        <ul className='inner__nav__links'>
                            <li>Resourse center</li>
                            <li>Case studies</li>
                            <li>Product brochures</li>
                            <li>Blog</li>
                            <li>Data Partners</li>
                            <li>Press</li>
                        </ul>
                    </li>
                    <li>Company
                        <ul className='inner__nav__links'>
                            <li>About</li>
                            <li>Careers</li>
                        </ul>
                    </li>
                    <li>Contact us</li>
                </ul>
                <div  onClick={() => setActive(!active)} className='menu__box' >
                    <img src={menu} alt='menubar' />
                </div>
            </nav>

        </header>
    )
}

export default NavBar