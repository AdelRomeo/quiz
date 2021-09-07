import React, {useContext} from 'react'
import classes from './AnswerItem.module.scss'
import QuestionContext from "../../context/question/questionContext";

function AnswerItem({idAnswer}) {

  const {testsList, testId, answerToQuestion, answerFlag, selectedAnswer, activeQuestion} = useContext(QuestionContext)

  const cls = [classes.AnswerItem]

  //если вариант на который кликнули и данный вариант это одно и тоже
  if (selectedAnswer === idAnswer) {
    //если ответили правильно
    if (answerFlag) {
      cls.push(classes.Success)
      //если ответили не правильно
    } else {
      cls.push(classes.Error)
    }
  }

  //правильный вариант ответа
  const {rightAnswer} = testsList[testId][activeQuestion]

  return (
    <li className={cls.join(' ')} onClick={() => {answerToQuestion(rightAnswer, idAnswer); }}>
      <p>{testsList[testId][activeQuestion].answerList[idAnswer]}</p>
    </li>
  )
}

export default AnswerItem