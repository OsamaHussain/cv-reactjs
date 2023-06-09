import React from 'react'
import styles from './TopNavbar.module.css'
import Contact from '../contact/Contact'
import Button from '../button/Button'

const TopNavbar = () => {
  return (
    <div className='container-fluid p-2 bg-dark'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-md-6'>
                        <Contact contactSocial={{
                            "facebook":"https://facebook.com/Osama.Hussain.Karachi/",
                            "stackoverflow":"https://stackoverflow.com/users/8513973/osama-hussain",
                            "github":"https://github.com/OsamaHussain/",
                            "linkedin":"https://www.linkedin.com/in/osama-hussain-5a35ab128/",
                            "twitter":"https://twitter.com/OsamaHu21062252",
                            "youtube":"https://www.youtube.com/@CodeDynamo"
                        }} className={styles.textColor}/>
                </div>
                <div className='col-md-6'>
                    <div className='d-flex justify-content-end'>
                        <div className={styles.loginBtn}>
                            <Button buttonClass='Blue' buttonText='Login' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopNavbar