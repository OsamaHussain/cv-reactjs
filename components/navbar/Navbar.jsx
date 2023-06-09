import React from 'react'
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className='container-fluid mt-2'>
        <div className='container'>
            <div className='navbar'>
                <div className={styles.logo}><span>Osama.</span> <span>Port</span><span>folio</span></div>
                <div className={styles.menu}>
                    <ul className='d-flex gap-3 list-inline m-auto'>
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Experience</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Feedback</a></li>
                        <li><a href="#">Contact Me</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Navbar