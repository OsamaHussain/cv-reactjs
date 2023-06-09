import React from 'react'
import Heading from '../heading/Heading'
import Paragraph from '../paragraph/Paragraph'
import Image from '../image/Image'

const Experience = () => {
  return (
    <div className='container-fluid'>
        <div className='container'>
            <div className='row my-5'>
                <div className='col-md-4'>
                    <Heading headLevel="2" headText="Experience" dot="1" />
                    <Paragraph paraText="I partner with startups, organizations and Fortune 500 companies to build digital products that help clients overcome challenges and create lasting connections with millions of people every day." />
                    <br /><br /><br /><br />
                    <div className='d-flex justify-content-start align-items-end mt-5'>
                        <Image imgSrc='/img/pattern.jpg' imgWidth="200px"/>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='row mt-4'>
                        <div className='col-md-12'>
                            <div className='d-flex align-items-center gap-2'>
                                <Heading headLevel="4" headText="Web Developer" />
                                <Heading headLevel="5" headText="Coolor Studio" />
                            </div>
                            <Heading headLevel="5" headText="May, 2014 — Present" />
                            <div className='mt-3'>
                                <Paragraph paraText="Designed and developed user-friendly website, including optimized check-out page that increased user clicks, and subsequently customer purchases by 20%." />
                            </div>
                        </div>
                        <hr />
                        <div className='col-md-12'>
                            <div className='d-flex align-items-center gap-2'>
                                <Heading headLevel="4" headText="Middle Frontend Developer" />
                                <Heading headLevel="5" headText="Illskill Agency" />
                            </div>
                            <Heading headLevel="5" headText="Jan, 2013 — May, 2014" />
                            <div className='mt-3'>
                                <Paragraph paraText="Leading a small team on a variety of development projects and delivering solutions to meet and exceed clients’ briefs." />
                            </div>
                        </div>
                        <hr />
                        <div className='col-md-12'>
                            <div className='d-flex align-items-center gap-2'>
                                <Heading headLevel="4" headText="IT Specialist" />
                                <Heading headLevel="5" headText="Motion Studio" />
                            </div>
                            <Heading headLevel="5" headText="Dec, 2009 — Jan, 2013" />
                            <div className='mt-3'>
                                <Paragraph paraText="Revamped web application security applications, minimizing hacker attacks from 2.3% to 0.02%." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Experience