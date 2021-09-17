import React from 'react'
import classes from './Home.module.scss'
import Title from "../../componets/Title/Title";
import QuizList from "../../componets/QuizList/QuizList";

function Home() {

 return(
   <div className={classes.Home}>
     <Title title='Список тестов'/>
     <div>
       <QuizList/>
     </div>
   </div>
 )
}

export default Home