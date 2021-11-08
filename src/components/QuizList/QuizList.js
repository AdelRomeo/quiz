import React, {useContext} from 'react'
import QuizItem from "../QuizItem/QuizItem";
import classes from './QuizList.module.scss'
import QuestionContext from "../../context/question/questionContext";

//список тестов
function QuizList() {

  //список тестов, функция меняющая подгружаемый тест, функция очищающая форму
  const {testsList, getQuizId} = useContext(QuestionContext)

  return (
    <ul className={classes.QuizList}>
      {testsList.map((test, i) => (<QuizItem key={i} getQuizId={getQuizId} id={i} name={testsList[i].id}/>))}
    </ul>
  )
}

export default QuizList