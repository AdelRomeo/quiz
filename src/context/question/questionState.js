import React, {useReducer} from 'react'
import QuestionContext from "./questionContext";
import questionReducer from "./questionReducer";

export default function QuestionState({children}) {

  const initialState = {
    testsList: [
      {
        question: 'Как дела?',
        answerList: ['Хорошо', 'Не хорошо', 'Плохо', 'Правильный ответ']
      },
      {
        question: 'Как дела2?',
        answerList: ['Хорошо2', 'Не хорошо2', 'Плохо2', 'Правильный ответ2']
      }
    ],
    testId: [0]
  }


  //расшариваем данные
  const [state, dispatch] = useReducer(questionReducer, initialState)

  //выбор нужного теста
  const choiceTest = id => {
    dispatch({
      type: 'TEST_ID',
      payload: id
    })
  }

  const {testsList, testId} = state

  return (
    <QuestionContext.Provider value={{testsList, testId, choiceTest}}>
      {children}
    </QuestionContext.Provider>
  )
}