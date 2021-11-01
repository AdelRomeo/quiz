import React, {useContext} from 'react'
import classes from './QuizFinished.module.scss'
import QuestionContext from "../../context/question/questionContext";

function QuizFinished() {

  const {testsList, testId, sumRightAnswer } = useContext(QuestionContext)

  return (
    <div className={classes.QuizFinished}>
      <h3>Тест окончен</h3>
      <p>Правильных ответов: {sumRightAnswer}</p>
      <p>Не правильных ответов: {testsList[testId].length - sumRightAnswer}</p>
    </div>
  )
}

export default QuizFinished