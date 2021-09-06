import React from 'react'
import {NavLink} from "react-router-dom";
import classes from './QuizItem.module.scss'

function QuizItem({getQuizId, id}) {

  return (
    <li onClick={()=>getQuizId(id)} className={classes.QuizItem}>
      <NavLink to={`question/${id+1}`}>
        На страницу теста
      </NavLink>
    </li>
  )
}

export default QuizItem