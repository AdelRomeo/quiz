import React, {useReducer} from 'react'
import QuestionContext from "./questionContext";
import questionReducer from "./questionReducer";

export default function QuestionState({children}) {

  const initialState = {
    //список тестов
    testsList: [
      [
        {
          //вопрос
          question: 'Как дела?',
          //варианты ответа
          answerList: ['Хорошо', 'Не хорошо', 'Плохо', 'Правильный ответ'],
          //правильный вариант ответа
          rightAnswer: 0
        },
        {
          //вопрос
          question: 'Как дела?2',
          //варианты ответа
          answerList: ['Хорошо', 'Не хорошо', 'Плохо', 'Правильный ответ'],
          //правильный вариант ответа
          rightAnswer: 1
        },
        {
          //вопрос
          question: 'Как дела?3',
          //варианты ответа
          answerList: ['Хорошо', 'Не хорошо', 'Плохо', 'Правильный ответ'],
          //правильный вариант ответа
          rightAnswer: 2
        }
      ],
      [
        {
          //вопрос
          question: 'Как дела22222?',
          //варианты ответа
          answerList: ['Хорошо2', 'Не хорошо2', 'Плохо2', 'Правильный ответ2'],
          //правильный вариант ответа
          rightAnswer: 2
        }
      ]
    ],
    //номер теста который будет показан
    testId: 0,
    //вариант ответа который выбрали (цифра)
    selectedAnswer: null,
    //флаг правильно ответили или нет
    answerFlag: false,
    //выбранный вопрос. (который сейчас на экране)
    activeQuestion: 0,
    //флаг закончился тест или нет
    quizFinished: false,
    //выбранный тест
    activeQuiz: null
  }


  //расшариваем данные
  const [state, dispatch] = useReducer(questionReducer, initialState)

  //выбор нужного теста
  const getQuizId = id => {
    dispatch({
      type: 'TEST_ID',
      payload: id
    })
  }

  //ответ на вопрос (клик по варианту ответа)
  const answerToQuestion = (rightAnswer, selectedAnswer) => {
    dispatch({
      type: 'ANSWER_TO_QUESTION',
      payload: rightAnswer === selectedAnswer,
      selectedAnswer
    })
    nextQuestion()
  }

  //переход к следующему вопросу в списке
  const nextQuestion = () => {
    setTimeout(() => {
      //если номер вопроса в тесте больше либо равен длине теста
      if (activeQuestion >= testsList[testId].length - 1) {
        quizIsFinished()
      }
      dispatch({
        type: 'NEXT_QUESTION',
        activeQuestion: activeQuestion + 1
      })
    }, 1000)
  }

  //тест окончен
  const quizIsFinished = () => {
    dispatch({
      type: 'QUIZ_FINISHED'
    })
  }

  const {
    testsList, testId,
    answerFlag, selectedAnswer,
    activeQuestion, quizFinished
  } = state

  return (
    <QuestionContext.Provider
      value={{
        testsList, testId,
        answerFlag, selectedAnswer,
        activeQuestion, quizFinished,
        getQuizId, answerToQuestion
      }}>
      {children}
    </QuestionContext.Provider>
  )
}