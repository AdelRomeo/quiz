import React, {useContext, useRef} from 'react'
import AnswerItem from "../AnswerItem/AnswerItem";
import classes from './AnswerList.module.scss'
import QuestionContext from "../../context/question/questionContext";

function AnswerList() {

  const {testsList, testId, activeQuestion} = useContext(QuestionContext)

  const good = useRef(0)

  const setCount = ()=>{
    good.current +=1
    console.log(good)
  }

  return(
    <ul className={classes.AnswerList}>
      {
        testsList[testId][activeQuestion].answerList.map((answer, i)=>{
          return(
            <AnswerItem setCount={setCount} key={i} idAnswer={i}
            />
          )
        })
      }
    </ul>
  )
}

export default AnswerList