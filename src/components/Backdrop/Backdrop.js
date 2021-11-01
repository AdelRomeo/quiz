import React from 'react'
import classes from './Backdrop.module.scss'

function Backdrop({showNavBar, setShowNavBar}) {
  return(
    <div className={classes.Backdrop} onClick={() => setShowNavBar(showNavBar = !showNavBar)}/>
  )
}

export default Backdrop