import React from 'react'
import styles from './Image.module.css'

const Image = (props) => {
  return (
    <div className={`d-flex justify-content-end ${props.classNameParent}`}>
        <img className={`img-fluid rounded ${props.className}`} src={props.imgSrc} alt={props.imgAlt} width={props.imgWidth?props.imgWidth:'auto'} height={props.imgHeight?props.imgHeight:'auto'} />
    </div>
  )
}

export default Image