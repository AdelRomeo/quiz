import React, {useContext} from 'react'
import AnswerList from "../../componets/AnswerList/AnswerList";
import classes from './Question.module.scss'
import QuestionContext from "../../context/question/questionContext";
import QuizFinished from "../../componets/QuizFinished/QuizFinished";
import Title from "../../componets/Title/Title";

function Question() {

  //данные из state (список со всеми тестами и номер теста на который кликнули)
  const {testsList, testId, activeQuestion, quizFinished} = useContext(QuestionContext)

  return (
    <div className={classes.Question}>
      <Title title='Ответьте на все вопросы'/>
      <div className={classes.QuestionContainer}>
        {
          quizFinished
            ? <QuizFinished/>
            : <>
              <p>{testsList[testId][activeQuestion].question}</p>
              <AnswerList answerList={testsList[testId].answerList}/>
            </>
        }
      </div>
    </div>
  )
}

export default Question