import React from 'react'
import classes from  './CreateQuiz.module.scss'
import Title from "../../componets/Title/Title";

function CreateQuiz() {
  return(
    <div className={classes.CreateQuiz}>
      <Title/>
      <form className={classes.Form}>
        <input type="text" placeholder='Ваш вопрос' className={`${classes.Question} ${classes.Item}`}/>
        <input type="text" placeholder='Вариант ответа 1' className={`${classes.Answer} ${classes.Item}`}/>
        <input type="text" placeholder='Вариант ответа 2' className={`${classes.Answer} ${classes.Item}`}/>
        <input type="text" placeholder='Вариант ответа 3' className={`${classes.Answer} ${classes.Item}`}/>
        <input type="text" placeholder='Вариант ответа 4' className={`${classes.Answer} ${classes.Item}`}/>
        <div className={classes.btnContainer}>
          <button className={`${classes.btn} ${classes.btnAdd}`}>Добавить вопрос</button>
          <button className={`${classes.btn} ${classes.btnCreate}`}>Создать тест</button>
        </div>
      </form>
    </div>
  )
}

export default CreateQuiz