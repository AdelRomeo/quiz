import React from 'react'
import classes from './QuizFinished.module.scss'

function QuizFinished() {
  return (
    <div className={classes.QuizFinished}>
      <h3>Тест окончен</h3>
      <p>Правильных ответа: 1</p>
      <p>Не правильных ответа: 2</p>
    </div>
  )
}

export default QuizFinished