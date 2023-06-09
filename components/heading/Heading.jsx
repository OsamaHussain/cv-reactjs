import React from 'react'
import styles from './Heading.module.css'

const Heading = (props) => {
  return (
    <div>
        {props.headLevel==1 && <div className={`${styles.textColor} ${styles.fontSize1} ${props.className}`}>{props.headText}{props.dot==1 && <span className={styles.dotBlue}>.</span>}</div>}
        {props.headLevel==2 && <div className={`${styles.textColor} ${styles.fontSize2} ${props.className}`}>{props.headText}{props.dot==1 && <span className={styles.dotBlue}>.</span>}</div>}
        {props.headLevel==3 && <div className={`${styles.textColor} ${styles.fontSize3} ${props.className}`}>{props.headText}{props.dot==1 && <span className={styles.dotBlue}>.</span>}</div>}
        {props.headLevel==4 && <div className={`${styles.textColor} ${styles.fontSize4} ${props.className}`}>{props.headText}{props.dot==1 && <span className={styles.dotBlue}>.</span>}</div>}
        {props.headLevel==5 && <div className={`${styles.textColor} ${styles.fontSize5} ${props.className}`}>{props.headText}{props.dot==1 && <span className={styles.dotBlue}>.</span>}</div>}
        {props.headLevel==6 && <div className={`${styles.textColor} ${styles.fontSize6} ${props.className}`}>{props.headText}{props.dot==1 && <span className={styles.dotBlue}>.</span>}</div>}
    </div>
  )
}

export default Heading