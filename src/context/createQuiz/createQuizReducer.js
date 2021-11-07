export default function CreateQuizReducer(state, action) {
  switch (action.type) {
    case 'SELECTED_RIGHT_ANSWER_ID': {
      return {...state, rightAnswerId: action.rightId}
    }
    case 'CHANGE_QUESTION': {
      return {...state, questionItem: {...action.quizItemCopy}}
    }
    case 'CREATE_QUIZ_ITEM':{
      return {...state, quizItem: {...action.question, answerList: action.answerList, rightAnswerId: +action.rightAnswerId}}
    }
    case 'ADD_QUIZ_ITEM': {
      return {...state, quiz: [...state.quiz, state.quizItem], quizItem: {}}
    }
    case 'RESET_QUIZ': {
      return {...state, questionItem: action.createTemplate()}
    }
    case 'ALERT_WRONG_FORM':
      return {...state, flagWrongForm: !state.flagWrongForm}
    case 'SUCCESS_FETCH':
      return {...state, successFetch: !state.successFetch}
    default:
      return state
  }
}