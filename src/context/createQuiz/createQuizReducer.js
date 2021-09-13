export default function CreateQuizReducer(state, action) {
  switch (action.type) {
    case 'SELECTED_RIGHT_ANSWER_ID': {
      return {...state, rightAnswerId: action.rightId}
    }
    default:
      return state
  }
}