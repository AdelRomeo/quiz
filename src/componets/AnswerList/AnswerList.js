import React from 'react'
import AnswerItem from "../QuestionItem/AnswerItem";
import classes from './AnswerList.module.scss'

function AnswerList() {

  const arr = [1,2,3,4]

  return(
    <ul className={classes.AnswerList}>
      {
        arr.map((ar, i)=>{
          return(
            <AnswerItem key={i}/>
          )
        })
      }
    </ul>
  )
}

export default AnswerList