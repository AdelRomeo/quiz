import React from 'react'
import QuizItem from "../QuizItem/QuizItem";
import classes from './QuizList.module.scss'

function QuizList() {
  return (
    <ul className={classes.QuizItem}>
      <QuizItem/>
    </ul>
  )
}

export default QuizList