import React from 'react'
import classes from './Title.module.scss'

function Title({title}) {
  return(
    <h1 className={classes.Title}>{title}</h1>
  )
}

export default Title