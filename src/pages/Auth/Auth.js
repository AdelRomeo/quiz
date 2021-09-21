import React, {useState} from 'react'
import classes from './Auth.module.scss'

function Auth() {

  const [valueName, setValueName] = useState('')
  const [valuePas, setValuePas] = useState('')

  return(
    <div className={classes.Auth}>
      <form>
        <input type="text" placeholder='Введите имя' value={valueName} onChange={(event)=>setValueName(event.target.value)}/>
        <input type="text" placeholder='Введите пароль' value={valuePas} onChange={(event)=>setValuePas(event.target.value)}/>
        <div>
          <input type="submit" value='Войти'/>
          <input type="submit" value='Зарегистрироваться'/>
        </div>
      </form>
    </div>
  )
}

export default Auth