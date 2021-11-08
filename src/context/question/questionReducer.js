

export default function QuestionReducer(state, action) {

  const {testId, selectedAnswer, answerFlag, activeQuestion, quizFinished, activeQuiz, sumRightAnswer, loading} = action

  switch (action.type) {
    case 'LOADING_TEST_LIST':
      return {...state, testsList: action.testsList}
    case 'TEST_ID':
      return {...state, testId: action.payload}
    case 'SUM_RIGHT_ANSWER':
      return {...state, sumRightAnswer: state.sumRightAnswer += 1}
    case 'ANSWER_TO_QUESTION':
      return {...state, answerFlag: action.payload, selectedAnswer: action.selAnswer}
    case 'NEXT_QUESTION':
      return {...state, selectedAnswer: null, activeQuestion: action.activeQuestion}
    case 'QUIZ_FINISHED':
      return {...state, quizFinished: action.isFinish}
    case 'LOADING':
      return {...state, loading: false}
    case 'DEFAULT_STATE':
      return {...state, testId, selectedAnswer, answerFlag, activeQuestion, quizFinished, activeQuiz, sumRightAnswer, loading}
    default:
      return state
  }
}