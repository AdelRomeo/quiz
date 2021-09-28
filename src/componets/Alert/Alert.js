import React, {useEffect, useState} from 'react'
import classes from './Alert.module.scss'

function Alert({message}) {

  const [hideAlert, setHideAlert] = useState('')

  useEffect(()=>{
    setTimeout(()=>{
      setHideAlert(classes.hide)
    }, 1000)
  }, [])

  //console.log('alert')

  return(
    <div className={`${classes.Alert} ${hideAlert}`}>{message}</div>
  )
}

export default Alert