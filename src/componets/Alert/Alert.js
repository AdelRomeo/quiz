import React, {useEffect, useState} from 'react'
import classes from './Alert.module.scss'

function Alert({message}) {

  const [hideAlert, setHideAlert] = useState('')

  const [statusAlert, setStatusAlert] = useState('')


  useEffect(() => {
    if (message !== 'Данные не корректны'){
      setStatusAlert(classes.hideSuccess)
    } else {
      setStatusAlert(classes.hideError)
    }
    setTimeout(() => {
      setHideAlert(classes.hide)
    }, 1000)
  }, [message])

  return (
    <div className={`${classes.Alert} ${hideAlert} ${statusAlert}`}>{message}</div>
  )
}

export default Alert