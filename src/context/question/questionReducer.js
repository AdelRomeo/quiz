export default function QuestionReducer(state, action) {
  switch (action.type) {
    case 'TEST_ID':
      return {...state, testId: action.payload}
    case 'ANSWER_TO_QUESTION':
      return {...state, answerFlag: action.payload}
    default:
      return state
  }
}