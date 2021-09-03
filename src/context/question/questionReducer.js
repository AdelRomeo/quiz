export default function QuestionReducer(state, action) {
  switch (action.type) {
    case 'TEST_ID':
      return {...state, testId: action.payload}
    default:
      return state
  }
}