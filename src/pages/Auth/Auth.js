import React, {useContext, useEffect, useState} from 'react'
import classes from './Auth.module.scss'
import AuthContext from "../../context/auth/authContext";

function Auth() {

  const [valueName, setValueName] = useState('')
  const [valuePas, setValuePas] = useState('')

  const {getDataNewUser, createNewUser, loginUser} = useContext(AuthContext)

  useEffect(() => {
    getDataNewUser(valueName, valuePas)
  }, [valueName, valuePas])

  const handleNewUser = (event) => {
    event.preventDefault()
    createNewUser()
  }

  const handlerLoginUser = (event) => {
    event.preventDefault()
    loginUser()
  }

  return (
    <div className={classes.Auth}>
      <form>
        <input type="text" placeholder='Введите имя' value={valueName} onChange={(event) => setValueName(event.target.value)}/>
        <input type="text" placeholder='Введите пароль' value={valuePas} onChange={(event) => setValuePas(event.target.value)}/>
        <div>
          <input type="submit" value='Войти' onClick={handlerLoginUser}/>
          <input type="submit" value='Зарегистрироваться' onClick={handleNewUser}/>
        </div>
      </form>
    </div>
  )
}

export default Auth