import React, {useState} from 'react'
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from "./pages/Home/Home";
import Question from "./pages/Question/Question";
import QuestionState from "./context/question/questionState";
import CreateQuiz from "./pages/CreateQuiz/CreateQuiz";
import CreateQuizState from "./context/createQuiz/createQuizState";
import Drawer from "./componets/Drawer/Drawer";
import Backdrop from "./componets/Backdrop/Backdrop";
import Auth from "./pages/Auth/Auth";
import AuthState from "./context/auth/authState";

function App() {

  const [showNavBar, setShowNavBar] = useState(false)

  return (
    <AuthState>
      <QuestionState>
        <CreateQuizState>
          <BrowserRouter>
            <Drawer showNavBar={showNavBar} setShowNavBar={setShowNavBar}/>
            {showNavBar ? <Backdrop showNavBar={showNavBar} setShowNavBar={setShowNavBar}/> : null}
            <Switch>
              <Route path='/question/:name' component={Question}/>
              <Route path='/' exact component={Home}/>
              <Route path='/createQuiz' component={CreateQuiz}/>
              <Route path='/auth' component={Auth}/>
              <Redirect to='/'/>
            </Switch>
          </BrowserRouter>
        </CreateQuizState>
      </QuestionState>
    </AuthState>
  );
}

export default App;
