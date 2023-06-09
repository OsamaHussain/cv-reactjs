import React from 'react'
import styles from './Contact.module.css'

const Contact = (props) => {
  return (
    <div className={`${styles.contact} ${props.className}`}>
        {props.contactPhone && 
            <div className='row'>
                <div className={`col-md-2 text-uppercase ${styles.fw}`}>Phone</div>
                <div className='col-md-10'>{props.contactPhone}</div>
            </div>
        }
        {props.contactEmail && 
            <div className='row'>
                <div className={`col-md-2 text-uppercase ${styles.fw}`}>Email</div>
                <div className='col-md-9'>{props.contactEmail}</div>
            </div>
        }
        {props.contactAddress && 
            <div className='row'>
                <div className={`col-md-2 text-uppercase ${styles.fw}`}>Address</div>
                <div className='col-md-10'>{props.contactAddress}</div>
            </div>
        }
        {props.contactSocial && 
            <div className='row'>
                <div className={`col-md-2 text-uppercase ${styles.fw}`}>Social</div>
                <div className='col-md-10 d-flex gap-3 align-items-center'>
                    {props.contactSocial.facebook && <a href={props.contactSocial.facebook}><i class="fab fa-facebook-f"></i></a>}
                    {props.contactSocial.twitter && <a href={props.contactSocial.twitter}><i class="fab fa-twitter"></i></a>}
                    {props.contactSocial.google && <a href={props.contactSocial.google}><i class="fab fa-google"></i></a>}
                    {props.contactSocial.instagram && <a href={props.contactSocial.instagram}><i class="fab fa-instagram"></i></a>}
                    {props.contactSocial.linkedin && <a href={props.contactSocial.linkedin}><i class="fab fa-linkedin-in"></i></a>}
                    {props.contactSocial.pinterest && <a href={props.contactSocial.pinterest}><i class="fab fa-pinterest"></i></a>}
                    {props.contactSocial.vk && <a href={props.contactSocial.vk}><i class="fab fa-vk"></i></a>}
                    {props.contactSocial.stackoverflow && <a href={props.contactSocial.stackoverflow}><i class="fab fa-stack-overflow"></i></a>}
                    {props.contactSocial.youtube && <a href={props.contactSocial.youtube}><i class="fab fa-youtube"></i></a>}
                    {props.contactSocial.slackhash && <a href={props.contactSocial.slackhash}><i class="fab fa-slack-hash"></i></a>}
                    {props.contactSocial.github && <a href={props.contactSocial.github}><i class="fab fa-github"></i></a>}
                    {props.contactSocial.dribbble && <a href={props.contactSocial.dribbble}><i class="fab fa-dribbble"></i></a>}
                    {props.contactSocial.reddit && <a href={props.contactSocial.reddit}><i class="fab fa-reddit-alien"></i></a>}
                    {props.contactSocial.whatsapp && <a href={props.contactSocial.whatsapp}><i class="fab fa-whatsapp"></i></a>}
                </div>
            </div>
        }
    </div>
  )
}

export default Contact