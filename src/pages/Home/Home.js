import React, {useContext, useEffect} from 'react'
import classes from './Home.module.scss'
import Title from "../../components/Title/Title";
import QuizList from "../../components/QuizList/QuizList";
import Loader from "../../components/Loader/Loader";
import QuestionContext from "../../context/question/questionContext";
import CreateQuizContext from "../../context/createQuiz/createQuizContext";

function Home() {

  const {loading} = useContext(QuestionContext)
  //запретсброс формы
  const {resetQuiz} = useContext(CreateQuizContext)
  //обнуление данных о том что тест закончился
  const {quizIsFinished, loadingTests} = useContext(QuestionContext)

  useEffect(() => {
    loadingTests()
    resetQuiz()
    quizIsFinished(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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