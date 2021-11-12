import React, {useContext, useEffect, useState} from 'react'
import classes from './Auth.module.scss'
import AuthContext from "../../context/auth/authContext";

function Auth() {

  const [valueName, setValueName] = useState('')
  const [valuePas, setValuePas] = useState('')

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
        <input type="text" placeholder='Введите имя' value={valueName} onChange={event => setValueName(event.target.value)}/>
        <input type="text" placeholder='Введите пароль' value={valuePas} onChange={event => setValuePas(event.target.value)}/>
        <div>
          <input type="submit" value='Войти' onClick={handlerLoginUser} disabled={!valueName || !valuePas}/>
          <input type="submit" value='Зарегистрироваться' onClick={handlerNewUser} disabled={!valueName || !valuePas}/>
        </div>
      </form>
    </div>
  )
}

export default Auth