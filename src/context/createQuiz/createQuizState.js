import React, {useReducer} from 'react'
import CreateQuizContext from "./createQuizContext";
import CreateQuizReducer from "./createQuizReducer";

export default function CreateQuizState({children}) {

  //один тест со список вопросов
  const initialState = {
    //правильный вариант ответа
    rightAnswerId: 1,
  }

  const [state, dispatch] = useReducer(CreateQuizReducer, initialState)

  //получение id правильного варианта ответа
  const setRightAnswerId = (rightId) => {
    dispatch({
      type: 'SELECTED_RIGHT_ANSWER_ID',
      rightId
    })
  }


  const {rightAnswerId} = state

  return (
    <CreateQuizContext.Provider value={{rightAnswerId, setRightAnswerId}}>
      {children}
    </CreateQuizContext.Provider>
  )
}