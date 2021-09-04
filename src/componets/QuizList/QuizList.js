import React, {useContext} from 'react'
import QuizItem from "../QuizItem/QuizItem";
import classes from './QuizList.module.scss'
import QuestionContext from "../../context/question/questionContext";

//список тестов
function QuizList() {

  //список тестов и функция меняющая подгружаемый тест
  const {testsList, choiceTest} = useContext(QuestionContext)

  return (
    <ul className={classes.QuizList}>
      {
        testsList.map((arr, i)=>{
          return(
            <QuizItem key={i} choiceTest={choiceTest} id={i}/>
          )
        })
      }
    </ul>
  )
}

export default QuizList