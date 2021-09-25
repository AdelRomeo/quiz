import React, {useEffect, useReducer} from 'react'
import AuthContext from "./authContext";
import authReducer from "./authReducer";

export default function AuthState({children}) {

  const initialState = {
    email: '',
    password: '',
    localId: null
  }

  useEffect(() => {
    checkLogin()
  }, [])

  //получение данных из заполненных полей
  const getDataNewUser = (email, pas) => {
    dispatch({
      type: 'DATA_NEW_USER',
      email, pas
    })
  }

  //регистрация нового пользователя на сервере
  const createNewUser = async () => {

    //объект с конфигурациями для отправки на сервер
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password, returnSecureToken: true})
    };

    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAxn_zWcRXpXGZmALtBzZIWwX6oWdoC7KY', requestOptions)
    //данные для обработки
    const data = await response.json()
    localStorage.setItem('time', new Date().getTime())
    addLocalId(data.localId)
  }

  //регистрация нового пользователя на сервере
  const loginUser = async () => {

    //объект с конфигурациями для отправки на сервер
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password, returnSecureToken: true})
    };

    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAxn_zWcRXpXGZmALtBzZIWwX6oWdoC7KY', requestOptions)
    //данные для обработки
    const data = await response.json()
    localStorage.setItem('time', new Date().getTime())
    addLocalId(data.localId)
  }

  //проверка залогинен пользователь или нет
  const checkLogin = () => {
    //если в localStorage есть time
    if (localStorage.getItem('time')) {
      //pastTime - время которое прошло с момента создания 'time'
      const pastTime = new Date().getTime() - localStorage.getItem('time')
      //если прошедшее время меньше часа
      if (pastTime < 3600000) {
        //console.log(`сессия активна. осталось: ${3600000 - pastTime} localId: ${localId}`)
      }
      //если сессия заканчивается
      if (pastTime < 3000000 || localId) {
        //обновляем сессию
        localStorage.setItem('time', new Date().getTime())
      }
    } else {
      //console.log('сессия закончилась')
    }
  }

  const addLocalId = (id) => {
    dispatch({type: 'ADD_LOCAL_ID', id})
    //console.log(state.localId)
  }

  //-------АВТОЛОГИН
  const autoLogin = () =>{
    setInterval(()=>{
      console.log('autologin')
    }, 11111000)
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  const {email, password, localId} = state

  return (
    <AuthContext.Provider value={{getDataNewUser, createNewUser, loginUser, autoLogin}}>
      {children}
    </AuthContext.Provider>
  )
}