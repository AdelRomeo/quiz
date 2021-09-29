import React, {useEffect, useReducer} from 'react'
import AuthContext from "./authContext";
import authReducer from "./authReducer";

export default function AuthState({children}) {

  const initialState = {
    email: '',
    password: '',
    localId: null,
    isLogin: false,
    showAlert: false,
    alertMessage: ''
  }

  useEffect(() => {
    //если в localStorage есть 'time'
    if (localStorage.getItem('time')) {
      //pastTime - время которое прошло с момента создания 'time'
      const pastTime = new Date().getTime() - localStorage.getItem('time')
      //если прошло больше часа
      if (pastTime > 3600000) {
        //разлогиниваемся
        logout()
      } else {
        statusLogin(true)
      }
    }
  }, [])

  //получение данных из заполненных полей
  const getDataNewUser = (email, pas) => {
    dispatch({
      type: 'DATA_NEW_USER',
      email, pas
    })
  }

  //вход на сайт
  const loginUser = async (isLogin) => {

    //объект с конфигурациями для отправки на сервер
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password, returnSecureToken: true})
    };

    //ссылка на регистрацию
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAxn_zWcRXpXGZmALtBzZIWwX6oWdoC7KY'

    //если isLogin === true
    if (isLogin) {
      //ссылка на авторизацию
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAxn_zWcRXpXGZmALtBzZIWwX6oWdoC7KY'
    }

    //отправляем запрос
    const response = await fetch(url, requestOptions)
    //данные для обработки
    const data = await response.json()
    //если успешно зашли
    if (data.localId) {
      //записываем в localStorage время на момент входа на сайт
      localStorage.setItem('time', new Date().getTime())
      //записываем в localStorage localId пользователя
      localStorage.setItem('localId', data.localId)
      //заносим в state localId пользователя
      addLocalId(data.localId)
      //запускаем автоподдержку сессии
      autoLogin(data.localId)
      //изменение роутов
      statusLogin(true)
      //показываем алерт
      toggleAlert(true, 'Вы успешно зашли')
    } else {
      //показываем алерт
      toggleAlert(true, 'Данные не корректны')
    }
  }

  //добавляем в state localId пользователя
  const addLocalId = (id) => {
    dispatch({type: 'ADD_LOCAL_ID', id})
  }

  //поддержка сессии
  const autoLogin = (dataLocalId) => {
    const timeLogin = setInterval(() => {
      //если в state есть localId и localId из state равен localId пришедшему с сервера
      if (localId || localId === dataLocalId) {
        //обновляем time в localStorage
        localStorage.setItem('time', new Date().getTime())
      }
      //иначе выходим
      else {
        logout()
        clearInterval(timeLogin)
      }
    }, 3600000)
  }

  //отображение роутов и ссылок
  const statusLogin = (loginMark) => {
    dispatch({
      type: 'IS_LOGIN',
      loginMark
    })
  }

  //показ Alert
  const toggleAlert = (mark, message) => {
    dispatch({
        type: 'TOGGLE_ALERT',
        mark, message
      }
    )
    setTimeout(()=>{
      dispatch({
          type: 'TOGGLE_ALERT',
          mark: false
        }
      )
    }, 2200)
  }

  //выход
  const logout = () => {
    dispatch({
      type: 'LOGOUT'
    })
    localStorage.removeItem('time')
    localStorage.removeItem('localId')

    toggleAlert(true, 'Вы вышли')
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  const {email, password, localId, isLogin, showAlert, alertMessage} = state

  return (
    <AuthContext.Provider value={{getDataNewUser, loginUser, logout, isLogin, showAlert, alertMessage}}>
      {children}
    </AuthContext.Provider>
  )
}