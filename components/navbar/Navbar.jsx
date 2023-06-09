import React from 'react'
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className='container-fluid mt-2 bg-light position-sticky top-0 z-1'>
        <div className='container'>
            <div className='navbar'>
                <div className={styles.logo}><span>Osama.</span> <span>Port</span><span>folio</span></div>
                <div className={styles.menu}>
                    <ul className='d-flex gap-3 list-inline m-auto'>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#feedback">Feedback</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Navbar