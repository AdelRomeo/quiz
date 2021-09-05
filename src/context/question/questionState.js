import React, {useReducer} from 'react'
import QuestionContext from "./questionContext";
import questionReducer from "./questionReducer";

export default function QuestionState({children}) {

  const initialState = {
    //список тестов
    testsList: [
      {
        //вопрос
        question: 'Как дела?',
        //варианты ответа
        answerList: ['Хорошо', 'Не хорошо', 'Плохо', 'Правильный ответ'],
        //правильный вариант ответа
        rightAnswer: 3
      },
      {
        //вопрос
        question: 'Как дела2?',
        //варианты ответа
        answerList: ['Хорошо2', 'Не хорошо2', 'Плохо2', 'Правильный ответ2'],
        //правильный вариант ответа
        rightAnswer: 2
      }
    ],
    //номер теста который будет показан
    testId: 0,
    //вариант ответа который выбрали
    selectedAnswer: null,
    //флаг правильно ответили или нет
    answerFlag: false
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

  //ответ на вопрос
  const answerToQuestion = (rightAnswer, selectedAnswer) => {
    dispatch({
      type: 'ANSWER_TO_QUESTION',
      payload: rightAnswer === selectedAnswer,
      selectedAnswer
    })
  }

  const {testsList, testId, answerFlag, selectedAnswer} = state

  return (
    <QuestionContext.Provider value={{testsList, testId, answerFlag, selectedAnswer, choiceTest, answerToQuestion}}>
      {children}
    </QuestionContext.Provider>
  )
}