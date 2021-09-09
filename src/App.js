import React from 'react'
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from "./pages/Home/Home";
import Question from "./pages/Question/Question";
import QuestionState from "./context/question/questionState";
import CreateQuiz from "./pages/CreateQuiz/CreateQuiz";
import CreateQuizState from "./context/createQuiz/createQuizState";


function App() {
  return (
    <QuestionState>
      <CreateQuizState>
        <BrowserRouter>
          <Switch>
            <Route path='/question/:name' component={Question}/>
            <Route path='/ddd' exact component={Home}/>
            <Route path='/' component={CreateQuiz}/>
            <Redirect to='/'/>
          </Switch>
        </BrowserRouter>
      </CreateQuizState>
    </QuestionState>
  );
}

export default App;
