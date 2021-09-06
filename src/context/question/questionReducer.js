export default function QuestionReducer(state, action) {
  switch (action.type) {
    case 'TEST_ID':
      return {...state, testId: action.payload}
    case 'ANSWER_TO_QUESTION':
      return {...state, answerFlag: action.payload, selectedAnswer: action.selectedAnswer}
    case 'NEXT_QUESTION':
      return {...state, selectedAnswer: null, activeQuestion: action.activeQuestion}
    case 'QUIZ_FINISHED':
      return {...state, quizFinished: true}
    default:
      return state
  }
}