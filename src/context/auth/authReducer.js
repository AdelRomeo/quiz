export default function authReducer(state, action) {
  switch (action.type) {
    case 'DATA_NEW_USER':
      return {...state, email: action.email, password: action.pas}
    case 'CREATE_NEW_USER':{
      return {...state, }
    }
    default:
      return state
  }
}