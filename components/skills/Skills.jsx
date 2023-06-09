import React from 'react'
import styles from './Skills.module.css'
import Heading from '../heading/Heading'
import Paragraph from '../paragraph/Paragraph'
import Image from '../image/Image'

const Skills = () => {
  return (
    <div className='container-fluid' id='skills'>
        <div className='container'>
            <div className='row my-5'>
                <div className='col-md-4'>
                    <Heading headLevel='2' headText='Skills' dot='1'/>
                    <Paragraph paraText="I am inspired by creating great work with people who are as passionate as I am about building something awesome." />
                    <div className='d-flex justify-content-start align-items-end mt-5'>
                        <Image imgSrc='/img/pattern.jpg' imgWidth="200px"/>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='row mt-4'>
                        <div className='col-md-6'>
                            <Heading headLevel="4" headText="Web Development" />
                            <Paragraph paraText="Javascript, Coffeescript, JAVA, Python, PHP, Go, Node.js, MongoDB, Redis, PostgreSQL, WebStorm." />
                        </div>
                        <div className='col-md-6'>
                            <Heading headLevel="4" headText="UI\UX Design" />
                            <Paragraph paraText="Photoshop, Illustrator, Sketch, Axure, XMind, Prototyping, Wireframing, User Research, Usability Testing." />
                        </div>
                        <div className='col-md-6'>
                            <hr />
                            <Heading headLevel="4" headText="Frontend Development" />
                            <Paragraph paraText="HTML, CSS, LESS, SASS, Bootstrap, Wordpress, Drupal, Phonegap / Cordova, Ionic, Foundation, Angular.js." />
                        </div>
                        <div className='col-md-6'>
                            <hr />
                            <Heading headLevel="4" headText="Consulting & SEO Audit" />
                            <Paragraph paraText="Screaming Frog, Woorank, Raventools, Semrush, Moz, WebCEO, Google Analytics, ChartBeat, CrazyEgg." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Skills