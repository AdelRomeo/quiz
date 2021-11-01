import React from 'react'
import {NavLink} from "react-router-dom";
import classes from './QuizItem.module.scss'

function QuizItem({getQuizId, id, name}) {

  return (
    <li onClick={()=>getQuizId(id)} className={classes.QuizItem}>
      <NavLink to={`question/${name}`}>
        На страницу теста {id+1}
      </NavLink>
    </li>
  )
}

export default QuizItem