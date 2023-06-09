import React from 'react'
import TopNavbar from '../../components/topnavbar/TopNavbar'
import Navbar from '../../components/navbar/Navbar'
import Overview from '../../components/overview/Overview'
import Skills from '../../components/skills/Skills'
import Education from '../../components/education/Education'
import Experience from '../../components/experience/Experience'
import Portfolio from '../../components/portfolio/Portfolio'
import Feedback from '../../components/feedback/Feedback'
import ContactForm from '../../components/contactform/ContactForm'
import Copyright from '../../components/copyright/Copyright'

const Home = () => {
  return (
    <>
        <TopNavbar />
        <Navbar />
        <Overview />
        <Skills />
        <Experience />
        <Education />
        <Portfolio />
        <Feedback />
        <ContactForm />
        <Copyright />
    </>
  )
}

export default Home