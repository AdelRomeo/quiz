import React, {useContext} from 'react'
import AnswerList from "../../componets/AnswerList/AnswerList";
import classes from './Question.module.scss'
import QuestionContext from "../../context/question/questionContext";
import QuizFinished from "../../componets/QuizFinished/QuizFinished";
import Title from "../../componets/Title/Title";
import Loader from "../../componets/Loader/Loader";

function Question() {

  const {testsList, testId, activeQuestion, quizFinished, loading} = useContext(QuestionContext)

  return (
    <div className={classes.Question}>
      <Title title='Ответьте на все вопросы'/>
      <div className={classes.QuestionContainer}>
        {
          loading
          ? <Loader/>
          : quizFinished
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