import React, {useContext} from 'react'
import CreateQuizContext from "../../context/createQuiz/createQuizContext";
import classes from "./Input.module.scss";

function Input({config}) {

  const {} = useContext(CreateQuizContext)

  return (
    //перебираем все перданные элементы объекта
    Object.keys(config).map((item, index) => {

      const {type, placeholder} = config[item]

      //если элемент с которым сейчас взаимодействуем и элемент в списке объекта равны
      if (item === ''){
        //меняем значение только для него
      }

      //строка для объединения классов
      let cls = ''

      //если нолевой элемент - вопрос
      if (index === 0) {
        cls = [classes.Item, classes.Question]
      } else {
        //остальные элементы - варианты ответа
        cls = [classes.Item, classes.Answer]
      }

      return (
        <input
          key={index}
          className={cls.join(' ')}
          type={type}
          placeholder={placeholder}
        />
      )
    })
  )
}

export default Input