import React, {useContext} from 'react'
import classes from './CreateQuiz.module.scss'
import Title from "../../components/Title/Title";
import CreateQuizContext from "../../context/createQuiz/createQuizContext";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import AlertForm from "../../components/Alerts/AlertForm/AlertForm";
import QuestionContext from "../../context/question/questionContext";
import {Link} from "react-router-dom";

function CreateQuiz() {

  const {createQuestion, quiz, flagWrongForm, successFetch} = useContext(CreateQuizContext)
  const {addNewTest} = useContext(QuestionContext)

  const renderInputs = () => {
    return <Input/>
  }

  //конфигурация для рендера <select>
  const renderSelect = () => {
    return <Select config={
      {
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

  const renderButtonFinishQuiz = (position) => {
    let link = <button className={`${classes.btn} ${classes.btnCreate}`} onClick={onCreateQuizHandler}>Создать тест</button>
    if (position) {
      link = <button className={`${classes.btn} ${classes.btnCreate}`} onClick={onCreateQuizHandler}><Link to='/'>Создать тест</Link></button>
    }
    return link
  }

  return (
    <article className={classes.CreateQuiz}>
      <div className={classes.Wrapper}>
        <Title title='Создайте свой тест'/>
        <form className={classes.Form}>
          {renderInputs()}
          {renderSelect()}
          <div className={classes.btnContainer}>
            <button className={`${classes.btn} ${classes.btnAdd}`} onClick={onAddQuestionHandler}>Добавить вопрос</button>
            {renderButtonFinishQuiz(successFetch)}
          </div>
        </form>
        {flagWrongForm ? <AlertForm success={false} descr={'Данные введины некорректно'}/> : null}
        {successFetch ? <AlertForm success={true} descr={'Вопрос добавлен'}/> : null}
      </div>
    </article>
  )
}

export default CreateQuiz