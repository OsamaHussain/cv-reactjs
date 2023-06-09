import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
    const buttonClass = (props.buttonClass == 'Blue') ? styles.ButtonBlue : (props.buttonClass == 'White') ? styles.ButtonWhite : styles.ButtonDefault;
    const buttonText = (props.buttonText) ? props.buttonText : 'Submit';
  return (
    <div className={buttonClass}>
        <button>
            {buttonText}
        </button>
    </div>
  )
}

export default Button