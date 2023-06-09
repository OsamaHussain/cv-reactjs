import React from 'react'
import styles from './Copyright.module.css'

const Copyright = () => {
  return (
    <div className={`container-fluid ${styles.CopyrightContainer} p-2`}>
        <div className='container'>
            <div className='d-flex justify-content-center align-items-center'>
                Copyright &copy; 2023 Osama.
            </div>
        </div>
    </div>
  )
}

export default Copyright