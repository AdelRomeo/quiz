import React from 'react'
import AnswerItem from "../AnswerItem/AnswerItem";
import classes from './AnswerList.module.scss'

function AnswerList({answerList}) {

  return(
    <ul className={classes.AnswerList}>
      {
        answerList.map((answer, i)=>{
          return(
            <AnswerItem key={i} answer={answer}/>
          )
        })
      }
    </ul>
  )
}

export default AnswerList