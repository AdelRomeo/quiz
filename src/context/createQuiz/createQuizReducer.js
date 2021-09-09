export default function CreateQuizReducer(state, action) {
  switch (action.type) {
    case 'FILLING_FIELD':
      return {...state, templateForm: action.templateForm}
    default:
      return state
  }
}