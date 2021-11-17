import React, {useContext} from 'react'
import CreateQuizContext from "../../context/createQuiz/createQuizContext";
import classes from "./Input.module.scss";

function Input() {

  const {changeQuestion, questionItem} = useContext(CreateQuizContext)

  return (
    //перебираем все перданные элементы объекта
    Object.keys(questionItem).map((item, index) => {

      const {type, placeholder, value} = questionItem[item]

      //строка для объединения классов ипутов
      let clsDescr = ''

      //если нолевой элемент - вопрос
      if (index === 0) {
        clsDescr = [classes.Item, classes.Question]
      } else {
        //остальные элементы - варианты ответа
        clsDescr = [classes.Item, classes.Answer]
      }

      //строка для объединения классов лейблов
      let clsAnim = [classes.LabelIn]
      //index === 0 - вопрос
      if (index === 0) {
        clsAnim.push(classes.LabelOutTitle)
      }
      //если в инпут что то введино уводим лейбл
      if (value.length > 0) {
        clsAnim.push(classes.LabelOut)
      }

      return (
        <div className={classes.Wrapper} key={index}>
          <label htmlFor={index} className={clsAnim.join(' ')}>{placeholder}</label>
          <input
            id={index}
            className={clsDescr.join(' ')}
            type={type}
            onChange={(event) => changeQuestion(item, event.target.value)}
            value={value}
          />
        </div>
      )
    })
  )
}

export default Input