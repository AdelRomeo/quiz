import React from 'react'
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from "./pages/Home/Home";
import Question from "./pages/Question/Question";
import QuestionState from "./context/question/questionState";


function App() {
  return (
    <QuestionState>
      <BrowserRouter>
        <Switch>
          <Route path='/question' component={Question}/>
          <Route path='/' exact component={Home}/>
          <Redirect to='/'/>
        </Switch>
      </BrowserRouter>
    </QuestionState>
  );
}

export default App;
