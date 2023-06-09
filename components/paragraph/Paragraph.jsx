import React from 'react'
import styles from './Paragraph.module.css'

const Paragraph = (props) => {
  return (
    <div>
        <p className={styles.paraStyle}>{props.paraText}</p>
    </div>
  )
}

export default Paragraph