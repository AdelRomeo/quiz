import React, {useEffect, useReducer} from 'react'
import QuestionContext from "./questionContext";
import questionReducer from "./questionReducer";

export default function QuestionState({children}) {

  const initialState = {
    //список тестов
    testsList: [],
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
    activeQuiz: null,
    //количество правильных ответов
    sumRightAnswer: 0,
    //показ лоадера на время загрузки
    loading: true
  }


  //расшариваем данные
  const [state, dispatch] = useReducer(questionReducer, initialState)

  useEffect(()=>{
    loadingTests()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //загрузка тестов с сервера
  const loadingTests = async () => {
    const testsList = []

    const response = await fetch('https://quiz-fb3e9-default-rtdb.europe-west1.firebasedatabase.app/quiz.json')
    const data = await response.json()
    Object.keys(data).forEach((item) => {
      testsList.push(data[item])
      data[item].id = item
    })

    dispatch({
      type: 'LOADING_TEST_LIST',
      testsList
    })

    setLoading()
  }

  //выбор нужного теста
  const getQuizId = id => {
    dispatch({
      type: 'TEST_ID',
      payload: id
    })
  }

  //ответ на вопрос (клик по варианту ответа)
  const answerToQuestion = (rightAnswer, selAnswer) => {

    if (rightAnswer === selAnswer) {
      getSumRightAnswer()
    }

    dispatch({
      type: 'ANSWER_TO_QUESTION',
      payload: rightAnswer === selAnswer,
      selAnswer
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

  //получение количества правильных ответов
  const getSumRightAnswer = () => {
    dispatch({
      type: 'SUM_RIGHT_ANSWER'
    })
  }

  //добавление нового теста
  const addNewTest = async (test) => {

    //объект с конфигурациями для отправки на сервер
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(test)
    };

    await fetch('https://quiz-fb3e9-default-rtdb.europe-west1.firebasedatabase.app/quiz.json', requestOptions)
  }

  const setLoading = ()=>{
    dispatch({
      type: 'LOADING'
    })
  }

  const {
    testsList, testId, answerFlag, selectedAnswer,
    activeQuestion, quizFinished, sumRightAnswer, loading
  } = state

  return (
    <QuestionContext.Provider
      value={{
        testsList, testId, selectedAnswer,
        answerFlag, sumRightAnswer, loading,
        activeQuestion, quizFinished,
        getQuizId, answerToQuestion,
        addNewTest, loadingTests
      }}>
      {children}
    </QuestionContext.Provider>
  )
}