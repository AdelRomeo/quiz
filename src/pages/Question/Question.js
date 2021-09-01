import React from 'react'
import AnswerList from "../../componets/AnswerList/AnswerList";
import classes from './Question.module.scss'

function Question() {
  return(
    <div className={classes.Question}>
      <div>
        <p>Текст вопроса</p>
        <AnswerList/>
      </div>
    </div>
  )
}

export default Question