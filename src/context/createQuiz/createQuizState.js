import React, {useReducer} from 'react'
import CreateQuizContext from "./createQuizContext";
import CreateQuizReducer from "./createQuizReducer";

export default function CreateQuizState({children}) {

  //один тест со список вопросов
  const initialState = {
    //правильный вариант ответа
    rightAnswerId: 1,
    value: '',
    activeItem: null,
    //пример
    quizItem: {
      question: {placeholder: 'Ваш вопрос', type: 'text', value: ''},
      option1: {placeholder: 'Вариант ответа 1', type: 'text', value: ''},
      option2: {placeholder: 'Вариант ответа 2', type: 'text', value: ''},
      option3: {placeholder: 'Вариант ответа 3', type: 'text', value: ''},
      option4: {placeholder: 'Вариант ответа 4', type: 'text', value: ''},
    },
  }

  const [state, dispatch] = useReducer(CreateQuizReducer, initialState)

  //получение id правильного варианта ответа
  const setRightAnswerId = (rightId) => {
    dispatch({
      type: 'SELECTED_RIGHT_ANSWER_ID',
      rightId
    })
  }

  const changeQuestion = (item, value) => {
    //копия всего вопроса из state
    const quizItemCopy = {...state.quizItem}
    //один элемент из объекта
    const element = {...quizItemCopy[item]}

    element.value = value

    quizItemCopy[item] = element

    dispatch({
      type: 'ADD_QUESTION',
      value, item, quizItemCopy
    })

    console.log(quizItem)
  }

  const {rightAnswerId, activeItem, quizItem} = state

  return (
    <CreateQuizContext.Provider value={{rightAnswerId, activeItem, quizItem, setRightAnswerId, changeQuestion}}>
      {children}
    </CreateQuizContext.Provider>
  )
}