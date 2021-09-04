import React from 'react'
import classes from './AnswerItem.module.scss'

function AnswerItem({answer}) {
  return(
  <li className={classes.AnswerItem}>
    <p>{answer}</p>
  </li>
  )
}

export default AnswerItem