import React, {useContext} from 'react'
import classes from './Home.module.scss'
import Title from "../../componets/Title/Title";
import QuizList from "../../componets/QuizList/QuizList";
import Loader from "../../componets/Loader/Loader";
import QuestionContext from "../../context/question/questionContext";

function Home() {

  const {loading} = useContext(QuestionContext)

  return (
    <div className={classes.Home}>
      <Title title='Список тестов'/>
      {
        loading
          ? <Loader/>
          : <div>
              <QuizList/>
            </div>
      }

    </div>
  )
}

export default Home