import React, {useContext} from 'react'
import AnswerList from "../../components/AnswerList/AnswerList";
import classes from './Question.module.scss'
import QuestionContext from "../../context/question/questionContext";
import QuizFinished from "../../components/QuizFinished/QuizFinished";
import Title from "../../components/Title/Title";
import Loader from "../../components/Loader/Loader";

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