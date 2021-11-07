import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import classes from './AlertForm.module.scss'

function AlertForm({success, descr}) {

  const cls = [classes.AlertFetch]
  let icon = faThumbsUp

  if (!success) {
    cls.push(classes.AlertNoFetch)
    icon = faThumbsDown
  }

  return(
    <div className={cls.join(' ')}>
      <p>{descr}</p>
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}

export default AlertForm