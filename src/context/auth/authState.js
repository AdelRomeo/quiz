import React, {useReducer} from 'react'
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";

export default function AuthState({children}) {

  const initialState = {
    email: '',
    password: ''
  }

  const getDataNewUser = (email, pas) => {
    dispatch({
      type: 'DATA_NEW_USER',
      email, pas
    })
  }

  //регистрация нового пользователя на сервере
  const createNewUser = async () => {

    // dispatch({
    //   type: 'CREATE_NEW_USER'
    // })

    //объект с конфигурациями для отправки на сервер
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password, returnSecureToken: true})
    };

    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAxn_zWcRXpXGZmALtBzZIWwX6oWdoC7KY', requestOptions)
    //данные для обработки
    const data = await response.json()
    console.log(data)
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  const {email, password} = state

  return (
    <AuthContext.Provider value={{getDataNewUser, createNewUser}}>
      {children}
    </AuthContext.Provider>
  )
}