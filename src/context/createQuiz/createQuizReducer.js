export default function CreateQuizReducer(state, action) {
  switch (action.type) {
    case 'FILLING_FIELD':
      return {...state, templateForm: action.templateFormCopy}
    case 'SELECTED_RIGHT_ANSWER_ID':{
      return {...state, rightAnswerId: action.rightId}
    }
    case 'ADD_QUESTION':
      return {...state, quizes: [...state.quizes, action.quiz]}
    default:
      return state
  }
}