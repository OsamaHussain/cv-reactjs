import React from 'react'
import styles from './Feedback.module.css'
import Heading from '../heading/Heading'
import Paragraph from '../paragraph/Paragraph'
import Image from '../image/Image'

const Feedback = () => {
  return (
    <div className='container-fluid' id='feedback'>
        <div className='container'>
            <div className='row my-5'>
                <div className='col-md-4'>
                    <Heading headLevel="2" headText="Feedback" dot="1" />
                    <Paragraph paraText="Take a look at the reviews of my customers and ensure the quality of my services." />
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <div className='d-flex justify-content-start align-items-end mt-5'>
                        <Image imgSrc='/img/pattern.jpg' imgWidth="200px"/>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='row mt-4'>
                        <div className='col-md-12'>
                            <div className='d-flex'>
                                <div className={`me-2`}>
                                    <Image imgSrc='/img/feedback-1.jpg' className={styles.FeedbackMaxWidth} />
                                </div>
                                <div className='ms-2'>
                                    <div className='d-flex align-items-center gap-2'>
                                        <Heading headLevel="4" headText="Stacey Don" />
                                        <Heading headLevel="5" headText="President @ Coolor Studio" />
                                    </div>
                                    <div className='mt-3'>
                                        <i>
                                            <Paragraph paraText='“Considers problems as a challenge and enjoys finding creative yet appropriate solutions. Danny is able to work out his own solutions, but also works well with a group to solve problems. Performs most jobs well and has the habit of checking work outcomes. Danny is achieving excellence in some areas but in others is not yet achieving the highest standards.”' />
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='col-md-12'>
                            <div className='d-flex'>
                                <div className={`me-2`}>
                                    <Image imgSrc='/img/feedback-2.jpg' className={styles.FeedbackMaxWidth} />
                                </div>
                                <div className='ms-2'>
                                    <div className='d-flex align-items-center gap-2'>
                                        <Heading headLevel="4" headText="Anson Shura" />
                                        <Heading headLevel="5" headText="Project Manager @ Motion Studio" />
                                    </div>
                                    <div className='mt-3'>
                                        <i>
                                            <Paragraph paraText='“He will always try to do what is required, even if it means performing tasks that are not in the job description or if required to do extra work unexpectedly. However, may sometimes complain about the extra load. Aiming for a top job in the organization. He sets very high standards, aware that this will bring attention and promotion.”' />
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='col-md-12'>
                            <div className='d-flex'>
                                <div className={`me-2`}>
                                    <Image imgSrc='/img/feedback-3.jpg' className={styles.FeedbackMaxWidth} />
                                </div>
                                <div className='ms-2'>
                                    <div className='d-flex align-items-center gap-2'>
                                        <Heading headLevel="4" headText="Gaylord Jefferson" />
                                        <Heading headLevel="5" headText="Developer @ Illskill Agency" />
                                    </div>
                                    <div className='mt-3'>
                                        <i>
                                            <Paragraph paraText='“When working to a firm but realistic deadline, Danny always completes tasks to a high standard. Care and accuracy is obvious even when put under pressure of time. Prepared to work all the extra hours it takes to meet the deadline.”' />
                                        </i>
                                    </div>
                                </div>
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

export default Feedback