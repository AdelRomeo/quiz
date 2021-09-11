import React, {useReducer} from 'react'
import CreateQuizContext from "./createQuizContext";
import CreateQuizReducer from "./createQuizReducer";

export default function CreateQuizState({children}) {

  //один тест со список вопросов
  const initialState = {
    //готовый тест
    quizes: [],
    //шаблон формы
    templateForm: {
      question: {placeholder: 'Ваш вопрос', type: 'text', value: ''},
      option1: {placeholder: 'Вариант ответа 1', type: 'text', value: ''},
      option2: {placeholder: 'Вариант ответа 2', type: 'text', value: ''},
      option3: {placeholder: 'Вариант ответа 3', type: 'text', value: ''},
      option4: {placeholder: 'Вариант ответа 4', type: 'text', value: ''},
    },
    //правильный вариант ответа
    rightAnswerId: 1,
  }

  const [state, dispatch] = useReducer(CreateQuizReducer, initialState)

  //изменение в строке инпута
  const fillingField = (value, controlName) => {
    //копия шаблона из state
    const templateFormCopy = {...templateForm}
    //копия элемента шаблона
    const item = {...templateFormCopy[controlName]}
    //изменение копии элемента шаблона
    item.value = value

    function Test(name, value){
      this.name = name
      this.value = value
    }

    let obj = new Test(controlName, value)

    let finObj = {}

    finObj = {...finObj, ...obj}
    console.log(finObj)

    //изменение копии шаблона из state
    templateFormCopy[controlName] = {...item}

    dispatch({
      type: 'FILLING_FIELD',
      templateFormCopy
    })
  }

  const setRightAnswerId = (rightId) => {
    dispatch({
      type: 'SELECTED_RIGHT_ANSWER_ID',
      rightId
    })
  }

  //клик по кнопке "Добавить вопрос"
  const addQuestion = (question, rightId) => {
    const quiz = {...question, rightAnswerId: rightId}
    dispatch({
      type: 'ADD_QUESTION',
      quiz
    })

    const obj = Object.keys(question).map((item)=>{
      return {item: question[item].value}
    })

  }

  const {templateForm, rightAnswerId} = state

  return (
    <CreateQuizContext.Provider value={{templateForm, rightAnswerId, fillingField, setRightAnswerId, addQuestion}}>
      {children}
    </CreateQuizContext.Provider>
  )
}