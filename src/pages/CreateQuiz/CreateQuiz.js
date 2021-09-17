import React, {useContext} from 'react'
import classes from './CreateQuiz.module.scss'
import Title from "../../componets/Title/Title";
import CreateQuizContext from "../../context/createQuiz/createQuizContext";
import Select from "../../componets/Select/Select";
import Input from "../../componets/Input/Input";
import QuestionContext from "../../context/question/questionContext";

function CreateQuiz() {

  const {createQuestion, quiz} = useContext(CreateQuizContext)
  const {addNewTest} = useContext(QuestionContext)


  const renderInputs = () => {
    return <Input/>
  }

  //конфигурация для рендера <select>
  const renderSelect = () => {
    return <Select config={{
      label: 'Выберите правильный вариант ответа',
      options: {
        value1: 1,
        value2: 2,
        value3: 3,
        value4: 4
      }
    }
    }/>
  }

  const onAddQuestionHandler = event => {
    event.preventDefault()

    createQuestion()
  }

  const onCreateQuizHandler = event => {
    event.preventDefault()

    addNewTest(quiz)
  }


  return (
    <article className={classes.CreateQuiz}>
      <Title title='Создайте свой тест'/>
      <form className={classes.Form}>
        {renderInputs()}
        {renderSelect()}
        <div className={classes.btnContainer}>
          <button className={`${classes.btn} ${classes.btnAdd}`} onClick={onAddQuestionHandler}>Добавить вопрос</button>
          <button className={`${classes.btn} ${classes.btnCreate}`} onClick={onCreateQuizHandler}>Создать тест</button>
        </div>
      </form>
    </article>
  )
}

export default CreateQuiz