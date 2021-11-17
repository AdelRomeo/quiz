import React, {useContext, useEffect, useState} from 'react'
import classes from './Auth.module.scss'
import AuthContext from "../../context/auth/authContext";

function Auth() {

  const [valueName, setValueName] = useState('')
  const [valuePas, setValuePas] = useState('')

  //стили изменения labels
  const clsName = [classes.labelNameIn]
  if (valueName.length > 0) {
    clsName.push(classes.labelNameOut)
  }

  const clsPass = [classes.labelPassIn]
  if (valuePas.length > 0) {
    clsPass.push(classes.labelPassOut)
  }

  const {getDataNewUser, loginUser} = useContext(AuthContext)

  useEffect(() => {
    getDataNewUser(valueName, valuePas)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueName, valuePas])

  const handlerNewUser = (event) => {
    event.preventDefault()
    loginUser(false)
  }

  const handlerLoginUser = (event) => {
    event.preventDefault()
    loginUser(true)
  }

  return (
    <div className={classes.Auth}>
      <form>
        <div>
          <label htmlFor='inputName' className={clsName.join(' ')}>Введите имя</label>
          <input id='inputName' type='text' className={classes.inputForm} value={valueName} onChange={event => setValueName(event.target.value)}/></div>
        <div>
          <label htmlFor='inputPass' className={clsPass.join(' ')}>Введите пароль</label>
          <input id='inputPass' type='text' className={classes.inputForm} value={valuePas} onChange={event => setValuePas(event.target.value)}/></div>
        <div>
          <input type='submit' value='Войти' onClick={handlerLoginUser} disabled={!valueName || !valuePas}/>
          <input type='submit' value='Зарегистрироваться' onClick={handlerNewUser} disabled={!valueName || !valuePas}/>
        </div>
      </form>
    </div>
  )
}

export default Auth