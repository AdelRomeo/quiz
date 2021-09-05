import React, {useContext} from 'react'
import classes from './AnswerItem.module.scss'
import QuestionContext from "../../context/question/questionContext";

function AnswerItem({idAnswer, stateStale}) {

  const {testsList, testId, answerToQuestion, answerFlag} = useContext(QuestionContext)

  const cls = [classes.AnswerItem]

  if (answerFlag){
    cls.push(classes.Success)
  } else cls.push(classes.Error)

  return (
    <li className={cls.join(' ')} onClick={() => answerToQuestion(testsList[testId].rightAnswer, idAnswer)}>
      <p>{testsList[testId].answerList[idAnswer]}</p>
    </li>
  )
}

export default AnswerItem