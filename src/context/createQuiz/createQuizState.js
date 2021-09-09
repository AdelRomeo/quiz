import React, {useReducer} from 'react'
import CreateQuizContext from "./createQuizContext";
import CreateQuizReducer from "./createQuizReducer";

export default function CreateQuizState({children}) {

  //один тест со список вопросов
  const initialState = {
    //готовый тест
    quizes: [],
    //готовый вопрос
    questions: {},
    //шаблон формы
    templateForm: {
      question: {placeholder: 'Ваш вопрос', type: 'text', value: ''},
      option1: {placeholder: 'Вариант ответа 1', type: 'text', value: ''},
      option2: {placeholder: 'Вариант ответа 2', type: 'text', value: ''},
      option3: {placeholder: 'Вариант ответа 3', type: 'text', value: ''},
      option4: {placeholder: 'Вариант ответа 4', type: 'text', value: ''},
    },
  }

  const [state, dispatch] = useReducer(CreateQuizReducer, initialState)

  //изменение в строке инпута
  const fillingField = (value, controlName)=>{
    //копия шаблона из state
    const templateForm = {...state.templateForm}
    //копия элемента шаблона
    const item = {...templateForm[controlName]}
    //изменение копии элемента шаблона
    item.value = value
    //изменение копии шаблона из state
    templateForm[controlName] = {...item}

    dispatch({
      type: 'FILLING_FIELD',
      templateForm
    })
  }

  //клик по кнопке "Добавить вопрос"
  const addQuestion = (index) => {

    dispatch({
      type: 'ADD_QUESTION',
      index
    })
  }

  const {value, templateForm} = state

  return (
    <CreateQuizContext.Provider value={{value, templateForm, fillingField}}>
      {children}
    </CreateQuizContext.Provider>
  )
}