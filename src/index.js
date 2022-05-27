import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  switch (props.type) {
    case 'primary':
      return (
        <button {...props} className={`${styles.button} ${styles.primary}`}>
          {props.text}
        </button>
      )
    case 'dashed':
      return (
        <button {...props} className={`${styles.button} ${styles.dashed}`}>
          {props.text}
        </button>
      )
    case 'text':
      return (
        <button {...props} className={`${styles.button} ${styles.text}`}>
          {props.text}
        </button>
      )
    case 'link':
      return (
        <button {...props} className={`${styles.button} ${styles.link}`}>
          {props.text}
        </button>
      )
    default:
      return (
        <button {...props} className={`${styles.button} ${styles.default}`}>
          {props.text}
        </button>
      )
  }
}
