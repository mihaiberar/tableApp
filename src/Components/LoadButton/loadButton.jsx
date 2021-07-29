import React from 'react'
import styles from './loadButton.module.css'

function LoadButton(props) {
  return (
    <button
      onClick={() => {
        props.onLoad(props.rowsNo)
        props.onShow()
      }}
      className={styles.loadBtn}
      style={{ color: props.color }}
    >
      {props.text}
    </button>
  )
}

export { LoadButton }
