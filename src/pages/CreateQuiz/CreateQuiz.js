import React, {useContext} from 'react'
import classes from './CreateQuiz.module.scss'
import Title from "../../componets/Title/Title";
import CreateQuizContext from "../../context/createQuiz/createQuizContext";
import Select from "../../componets/Select/Select";
import Input from "../../componets/Input/Input";

function CreateQuiz() {

  const {} = useContext(CreateQuizContext)


  const renderInputs = () => {

    return <Input
      config={{
        question: {placeholder: 'Ваш вопрос', type: 'text', value: ''},
        option1: {placeholder: 'Вариант ответа 1', type: 'text', value: ''},
        option2: {placeholder: 'Вариант ответа 2', type: 'text', value: ''},
        option3: {placeholder: 'Вариант ответа 3', type: 'text', value: ''},
        option4: {placeholder: 'Вариант ответа 4', type: 'text', value: ''},
      }}
    />
  }

  //конфигурация для рендера <select>
  const renderSelect = () => {
    return <Select config={{
      label: 'Выберите правильный вариант ответа',
      options: {
        value1: 1,
        value2: 2,
        value3: 3,
        value4: 4,
      }
    }
    }/>
  }

  const onAddHandler = (event) => {
    event.preventDefault()
  }

  return (
    <article className={classes.CreateQuiz}>
      <Title/>
      <form className={classes.Form}>
        {renderInputs()}
        {renderSelect()}
        <div className={classes.btnContainer}>
          <button className={`${classes.btn} ${classes.btnAdd}`} onClick={onAddHandler}>Добавить вопрос</button>
          <button className={`${classes.btn} ${classes.btnCreate}`}>Создать тест</button>
        </div>
      </form>
    </article>
  )
}

export default CreateQuiz