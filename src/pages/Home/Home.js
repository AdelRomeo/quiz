import React from 'react'
import classes from './Home.module.scss'
import Title from "../../componets/Title/Title";
import QuizList from "../../componets/QuizList/QuizList";
import {Link} from "react-router-dom";

function Home() {
 return(
   <div className={classes.Home}>
     <Title/>
     <Link to='/createQuiz'>Создать тест</Link>
     <div>
       <QuizList/>
     </div>
   </div>
 )
}

export default Home