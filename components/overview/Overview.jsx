import React from 'react'
import styles from './Overview.module.css'
import Button  from '../button/Button'
import Heading from '../heading/Heading'
import Paragraph from '../paragraph/Paragraph'
import Contact from '../contact/Contact'
import Image from '../image/Image'
import profile from '/img/profile.jpg'

const Overview = () => {
  return (
    <div className='container-fluid'>
        <div className='container'>
            <div className='row my-5'>
                <div className='col-md-6'>
                    <Heading headLevel="1" headText="I am Osama Hussain" dot="1"/>
                    <Paragraph paraText="I am a Web Developer located in Hartford, Connecticut. I currently work as a part time Remote Junior Web Developer for Coolor, located in Las Vegas. I am looking to take on more work and to increase my skills as a Web Developer." />
                    <Contact contactPhone="+1-203-324-5400" contactEmail="osamahussain897@gmail.com" contactAddress="3113 Lochmere Lane, Hartford, CA 06103" contactSocial={{
                        "facebook":"https://facebook.com/Osama.Hussain.Karachi/",
                        "stackoverflow":"https://stackoverflow.com/users/8513973/osama-hussain",
                        "github":"https://github.com/OsamaHussain/",
                        "linkedin":"https://www.linkedin.com/in/osama-hussain-5a35ab128/",
                        "twitter":"https://twitter.com/OsamaHu21062252",
                        "youtube":"https://www.youtube.com/@CodeDynamo"
                    }}/>
                    <div className='d-flex gap-3'>
                        <Button buttonClass='Blue' buttonText="Contact Me" />
                        <Button buttonClass='White' buttonText="Download CV" />
                    </div>
                </div>
                <div className='col-md-6'>
                    <Image imgSrc={profile} imgAlt='Profile.Image' imgHeight='300px'/>
                </div>
            </div>
        </div>
        <hr />
    </div>
    
  )
}

export default Overview