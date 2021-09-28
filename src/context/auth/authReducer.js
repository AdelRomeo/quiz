export default function authReducer(state, action) {
  switch (action.type) {
    case 'DATA_NEW_USER': return {...state, email: action.email, password: action.pas}
    case 'ADD_LOCAL_ID': return {...state, localId: action.id}
    case 'IS_LOGIN': return {...state, isLogin: action.loginMark}
    case 'TOGGLE_ALERT': return {...state, showAlert: action.mark, alertMessage: action.message}
    case 'LOGOUT': return {...state, localId: null, isLogin: false}
    default: return state
  }
}