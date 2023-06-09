import React from 'react'
import styles from './ContactForm.module.css'
import Heading from '../heading/Heading'
import Paragraph from '../paragraph/Paragraph'
import Button from '../button/Button'

const ContactForm = () => {
  return (
    <div className='container-fluid'>
        <div className='container'>
            <div className='row my-5'>
                <div className='col-md-4'>
                    <Heading headLevel='2' headText='Contact' dot='1' />
                    <Paragraph paraText='Are you working on something great? I would love to help make it happen! Drop me a letter and start your project right now! Just do it.' />
                </div>
                <div className='col-md-8 mt-4'>
                    <form action="" method='post'>
                        <div className='row'>
                            <div className="col-md-4">
                                <input type="text" name="name" id="name" placeholder='Name' className={`${styles.ContactFormTextBox} mb-4`}/>
                                <input type="email" name="email" id="email" placeholder='E-mail' className={styles.ContactFormTextBox}/>
                            </div>
                            <div className='col-md-8'>
                                <textarea name="message" id="message" className={styles.ContactFormTextArea} placeholder='Message'></textarea>
                            </div>
                            <div className='col-md-12'>
                                <div className='mt-3 d-flex justify-content-end'>
                                    <Button buttonClass='Blue' buttonText='Send Message'/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactForm