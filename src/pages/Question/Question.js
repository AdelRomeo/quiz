import React, {useContext} from 'react'
import AnswerList from "../../componets/AnswerList/AnswerList";
import classes from './Question.module.scss'
import QuestionContext from "../../context/question/questionContext";

function Question() {

  //данные из state (список со всеми тестами и номер теста на который кликнули)
  const {testsList, testId} = useContext(QuestionContext)

  return(
    <div className={classes.Question}>
      <div>
        <p>{testsList[testId].question}</p>
        <AnswerList answerList={testsList[testId].answerList}/>
      </div>
    </div>
  )
}

export default Question