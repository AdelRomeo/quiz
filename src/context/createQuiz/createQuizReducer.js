export default function CreateQuizReducer(state, action) {
  switch (action.type) {
    case 'SELECTED_RIGHT_ANSWER_ID': {
      return {...state, rightAnswerId: action.rightId}
    }
    case 'ADD_QUESTION': {
      return {...state, questionItem: {...action.quizItemCopy}}
    }
    case 'CREATE_QUIZ_ITEM':{
      return {...state, quizItem: {...action.question, answerList: action.answerList, rightAnswerId: +action.rightAnswerId}}
    }
    case 'RESET_QUIZ': {
      return {...state, questionItem: action.createTemplate()}
    }
    default:
      return state
  }
}