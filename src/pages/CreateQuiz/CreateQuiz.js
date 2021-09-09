import React, {useContext} from 'react'
import classes from './CreateQuiz.module.scss'
import Title from "../../componets/Title/Title";
import CreateQuizContext from "../../context/createQuiz/createQuizContext";

function CreateQuiz() {

  const {fillingField, templateForm} = useContext(CreateQuizContext)


  const renderInputs = () => {
    //перебор объекта по ключам
    return Object.keys(templateForm).map((controlName, index) => {

      //классы
      let cls = ''

      //если нолевой элемент - вопрос
      if (index === 0) {
        cls = [classes.Item, classes.Question]
      } else {
        //остальные элементы - варианты ответа
        cls = [classes.Item, classes.Answer]
      }

      const item = templateForm[controlName]

      return (
        <input
          key={index}
          placeholder={item.placeholder}
          type={item.type}
          className={cls.join(' ')}
          value={item.value}
          onChange={event => fillingField(event.target.value, controlName)}
        />
      )
    })
  }

  return (
    <article className={classes.CreateQuiz}>
      <Title/>
      <form className={classes.Form}>
        {renderInputs()}
        <div className={classes.btnContainer}>
          <button className={`${classes.btn} ${classes.btnAdd}`}>Добавить вопрос</button>
          <button className={`${classes.btn} ${classes.btnCreate}`}>Создать тест</button>
        </div>
      </form>
    </article>
  )
}

export default CreateQuiz