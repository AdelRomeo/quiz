export default function authReducer(state, action) {
  switch (action.type) {
    case 'DATA_NEW_USER':
      return {...state, email: action.email, password: action.pas}
    case 'ADD_LOCAL_ID':{
      return {...state, localId: action.id}
    }
    default:
      return state
  }
}