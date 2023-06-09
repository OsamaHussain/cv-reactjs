import React from 'react'
import styles from './Education.module.css'
import Heading from '../heading/Heading'
import Paragraph from '../paragraph/Paragraph'
import Image from '../image/Image'

const Education = () => {
  return (
    <div className='container-fluid'>
        <div className='container'>
            <div className='row my-5'>
                <div className='col-md-4'>
                    <Heading headLevel="2" headText="Education" dot="1" />
                    <Paragraph paraText="All my life I have been driven by my strong belief that education is important. I try to learn something new every single day." />
                    <div className='d-flex justify-content-start align-items-end mt-5'>
                        <Image imgSrc='/img/pattern.jpg' imgWidth="200px"/>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='row mt-4'>
                        <div className='col-md-12'>
                            <div className='d-flex align-items-center gap-2'>
                                <Heading headLevel="4" headText="Google Developer Training" />
                                <Heading headLevel="5" headText="Google" />
                            </div>
                            <Heading headLevel="5" headText="Apr, 2015 — May, 2015" />
                            <div className='mt-3'>
                                <Paragraph paraText="Learn to use App Engine, Google's Platform as a Service, to build the backend for web apps that scale not only as your user base grows but as request volumes peaks with sudden demand." />
                            </div>
                        </div>
                        <hr />
                        <div className='col-md-12'>
                            <div className='d-flex align-items-center gap-2'>
                                <Heading headLevel="4" headText="Software Development" />
                                <Heading headLevel="5" headText="Boston University" />
                            </div>
                            <Heading headLevel="5" headText="Jan, 2005 — May, 2009" />
                            <div className='mt-3'>
                                <Paragraph paraText="BSc (Hons) in Software Development. Outstanding Academic Achievement Award." />
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

export default Education