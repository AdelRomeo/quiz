import React, {useContext} from 'react'
import AnswerItem from "../AnswerItem/AnswerItem";
import classes from './AnswerList.module.scss'
import QuestionContext from "../../context/question/questionContext";

function AnswerList() {

  const {testsList, testId, activeQuestion} = useContext(QuestionContext)

  //console.log('list', testsList[testId][activeQuestion].answerList)

  return (
    <ul className={classes.AnswerList}>
      {
        testsList[testId][activeQuestion].answerList.map((answer, i) => {
          return (
            <AnswerItem key={i} idAnswer={i}
            />
          )
        })
      }
    </ul>
  )
}

export default AnswerList