import React from 'react'
import classes from './QuizItem.module.scss'
import {NavLink} from "react-router-dom";

function QuizItem() {


  return (
    <li>
      <NavLink to='/question'>
        На страницу вопроса
      </NavLink>
    </li>
  )
}

export default QuizItem