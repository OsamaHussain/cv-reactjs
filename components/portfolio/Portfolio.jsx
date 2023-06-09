import React from 'react'
import portfolioImg1 from '/img/portfolio-1.jpg'
import portfolioImg2 from '/img/portfolio-2.jpg'
import portfolioImg3 from '/img/portfolio-3.jpg'
import portfolioImg4 from '/img/portfolio-4.jpg'
import portfolioImg5 from '/img/portfolio-5.jpg'
import portfolioImg6 from '/img/portfolio-6.jpg'
import portfolioImg7 from '/img/portfolio-7.jpg'
import portfolioImg8 from '/img/portfolio-8.jpg'
import styles from './Portfolio.module.css'
import Heading from '../heading/Heading'
import Image from '../image/Image'

const Portfolio = () => {
  return (
    <div className='container-fluid' id='portfolio'>
        <div className='container'>
            <div className='row my-5'>
                <div className='col-md-12'>
                    <Heading headLevel="2" headText="Portfolio" dot="1" />
                </div>
                <div className='col-md-12'>
                    <div className='d-flex align-items-center gap-3'>
                        <Heading headLevel="6" headText="All Projects" className={styles.active}/>
                        <Heading headLevel="6" headText="Websites"/>
                        <Heading headLevel="6" headText="UI/UX Design"/>
                        <Heading headLevel="6" headText="Frontend"/>
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className={`row my-4 gy-4 gx-4`}>
                        <div className='col-md-3'>
                            <Image imgSrc={portfolioImg1} className={`${styles.zoomEffect}`} classNameParent={`${styles.zoomEffectParent}`} />
                            <div className='mt-2'>
                                <Heading headLevel="4" headText='Shop web app "Patty"' />
                                <Heading headLevel="5" headText="April, 2017" />
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <Image imgSrc={portfolioImg2} className={`${styles.zoomEffect}`} classNameParent={`${styles.zoomEffectParent}`} />
                            <div className='mt-2'>
                                <Heading headLevel="4" headText='Startup website "Phoenix"' />
                                <Heading headLevel="5" headText="March, 2016" />
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <Image imgSrc={portfolioImg3} className={`${styles.zoomEffect}`} classNameParent={`${styles.zoomEffectParent}`} />
                            <div className='mt-2'>
                                <Heading headLevel="4" headText='Corporate chat "eWesta"' />
                                <Heading headLevel="5" headText="December, 2015" />
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <Image imgSrc={portfolioImg4} className={`${styles.zoomEffect}`} classNameParent={`${styles.zoomEffectParent}`} />
                            <div className='mt-2'>
                                <Heading headLevel="4" headText='Resturant web app "Foody"' />
                                <Heading headLevel="5" headText="May, 2014" />
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <Image imgSrc={portfolioImg5} className={`${styles.zoomEffect}`} classNameParent={`${styles.zoomEffectParent}`} />
                            <div className='mt-2'>
                                <Heading headLevel="4" headText='Game website "Stark"' />
                                <Heading headLevel="5" headText="June, 2014" />
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <Image imgSrc={portfolioImg6} className={`${styles.zoomEffect}`} classNameParent={`${styles.zoomEffectParent}`} />
                            <div className='mt-2'>
                                <Heading headLevel="4" headText='Blogger website "Te4h"' />
                                <Heading headLevel="5" headText="April, 2014" />
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <Image imgSrc={portfolioImg7} className={`${styles.zoomEffect}`} classNameParent={`${styles.zoomEffectParent}`} />
                            <div className='mt-2'>
                                <Heading headLevel="4" headText='Product website "Lamp"' />
                                <Heading headLevel="5" headText="December, 2013" />
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <Image imgSrc={portfolioImg8} className={`${styles.zoomEffect}`} classNameParent={`${styles.zoomEffectParent}`} />
                            <div className='mt-2'>
                                <Heading headLevel="4" headText='Blog web app "Zebra"' />
                                <Heading headLevel="5" headText="March, 2013" />
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

export default Portfolio