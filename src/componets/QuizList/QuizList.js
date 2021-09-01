import React from 'react'
import QuizItem from "../QuizItem/QuizItem";
import classes from './QuizList.module.scss'

function QuizList() {

  const arrLink = [1,2,3,4,5]

  return (
    <ul className={classes.QuizItem}>
      {
        arrLink.map((arr, i)=>{
          return(
            <QuizItem key={i}/>
          )
        })
      }
    </ul>
  )
}

export default QuizList