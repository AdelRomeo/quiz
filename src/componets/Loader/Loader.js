import React from 'react'
import classes from './Loading.module.scss'

function Loader() {
  return(
    <div className={classes.Loader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loader