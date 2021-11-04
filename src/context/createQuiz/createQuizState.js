import React, {useReducer} from 'react'
import CreateQuizContext from "./createQuizContext";
import CreateQuizReducer from "./createQuizReducer";

//шаблон теста
const createTemplate = () => {
  return {
    question: {placeholder: 'Ваш вопрос', type: 'text', value: ''},
    option1: {placeholder: 'Вариант ответа 1', type: 'text', value: ''},
    option2: {placeholder: 'Вариант ответа 2', type: 'text', value: ''},
    option3: {placeholder: 'Вариант ответа 3', type: 'text', value: ''},
    option4: {placeholder: 'Вариант ответа 4', type: 'text', value: ''},
  }
}

export default function CreateQuizState({children}) {

  const initialState = {
    //правильный вариант ответа
    rightAnswerId: 1,
    //активный элемент
    activeItem: null,
    //шаблон вопроса
    questionItem: createTemplate(),
    //готовый вопрос
    quizItem: {},
    //готовый тест
    quiz: [],
    //показ сообщения о неправильно заполненной форме
    flagWrongForm: false,
    //показ сообщения об успешном добавлении нового теста
    successFetch: false
  }

  const [state, dispatch] = useReducer(CreateQuizReducer, initialState)

  //получение id правильного варианта ответа
  const setRightAnswerId = (rightId) => {
    dispatch({
      type: 'SELECTED_RIGHT_ANSWER_ID',
      rightId
    })
  }

  //изменение вопроса
  const changeQuestion = (item, value) => {
    //копия всего вопроса из state
    const quizItemCopy = {...state.questionItem}

    //один элемент из объекта
    const element = {...quizItemCopy[item]}
    //меняет элемент в копии
    element.value = value
    //меняем копию
    quizItemCopy[item] = element

    dispatch({
      type: 'CHANGE_QUESTION',
      value, item, quizItemCopy
    })
  }

  //создание вопроса
  const createQuestion = () => {
    //вопрос
    const question = {}
    //список ответов
    const answerList = []
    Object.keys(questionItem).forEach((item, index) => {
      //если нолевой элемент - это вопрос
      if (index === 0) {
        question[item] = questionItem[item].value
      } else {
        //варианты ответа
        answerList.push(questionItem[item].value)
      }
    })

    dispatch({
      type: 'CREATE_QUIZ_ITEM',
      question, answerList, rightAnswerId
    })
    //валидация и добавление данных
    validationForm(question, answerList)
  }

  //добавление вопроса
  const addQuizItem = () => {
    showSuccessFetch()
    dispatch({
      type: 'ADD_QUIZ_ITEM'
    })
  }

  //возможность перехода на главную страницу по клику на кнопку отправки теста
  const showSuccessFetch = () => {
    dispatch({
        type: 'SUCCESS_FETCH'
      }
    )
  }

  //сброс состояние вопроса
  const resetQuiz = () => {
    dispatch({
      type: 'RESET_QUIZ',
      createTemplate
    })
  }

  //валидация формы
  //que - вопрос. list - список ответов
  const validationForm = (que, list) => {
    //в validList попадают ответы длинна которых >= 1
    const validList = list.filter(word => word.length >= 1)

    //если длина вопроса больше трех символов и все ответы прошли валидацию
    if (que.question.length > 3 && validList.length === list.length) {
      //добавляем вопрос
      addQuizItem()
      //сбрасываем форму
      resetQuiz()
    } else {
      //показываем сообщение
      showAlertWrongForm()
    }
  }

  //показ сообщения о неправильно заполненной форме
  const showAlertWrongForm = () => {
    dispatch({
      type: 'ALERT_WRONG_FORM'
    })
    const timer = setTimeout(() => {
      dispatch({
        type: 'ALERT_WRONG_FORM'
      })
      clearTimeout(timer)
    }, 2000)
  }

  const {rightAnswerId, activeItem, questionItem, quiz, flagWrongForm, successFetch} = state

  return (
    <CreateQuizContext.Provider value={
      {
        rightAnswerId, activeItem, questionItem, quiz, flagWrongForm, successFetch,
        setRightAnswerId, changeQuestion, createQuestion
      }
    }>
      {children}
    </CreateQuizContext.Provider>
  )
}