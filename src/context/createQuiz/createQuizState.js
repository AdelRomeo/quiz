import React, {useReducer} from 'react'
import CreateQuizContext from "./createQuizContext";
import CreateQuizReducer from "./createQuizReducer";

//
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

  //один тест со список вопросов
  const initialState = {
    //правильный вариант ответа
    rightAnswerId: 1,
    //активный элемент
    activeItem: null,
    //шаблон вопроса
    questionItem: createTemplate(),
    quizItem: {}
  }

  const [state, dispatch] = useReducer(CreateQuizReducer, initialState)

  //получение id правильного варианта ответа
  const setRightAnswerId = (rightId) => {
    dispatch({
      type: 'SELECTED_RIGHT_ANSWER_ID',
      rightId
    })
  }

  //создание вопроса
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
      type: 'ADD_QUESTION',
      value, item, quizItemCopy
    })
  }

  //добавление вопроса в список
  const createQuestion = () => {
    const question = {}
    const answerList = []
    Object.keys(questionItem).map((item, index) => {
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

    resetQuiz()
  }

  //сброс состояние вопроса
  const resetQuiz = ()=>{
    dispatch({
      type: 'RESET_QUIZ',
      createTemplate
    })
  }

  const {rightAnswerId, activeItem, questionItem} = state

  return (
    <CreateQuizContext.Provider value={{rightAnswerId, activeItem, questionItem, setRightAnswerId, changeQuestion, createQuestion}}>
      {children}
    </CreateQuizContext.Provider>
  )
}