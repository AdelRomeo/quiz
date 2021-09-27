import React, {useContext, useEffect, useState} from 'react'
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
import AuthContext from "./context/auth/authContext";

function App() {

  const [showNavBar, setShowNavBar] = useState(false)

  const {isLogin, logout} = useContext(AuthContext)

  //если не авторизован
  let routes = (
    <Switch>
      <Route path='/question/:name' component={Question}/>
      <Route path='/' exact component={Home}/>
      <Route path='/auth' component={Auth}/>
      <Redirect to='/'/>
    </Switch>
  )

  //если авторизован
  if (isLogin){
    routes = (
      <Switch>
        <Route path='/question/:name' component={Question}/>
        <Route path='/' exact component={Home}/>
        <Route path='/createQuiz' component={CreateQuiz}/>
        <Redirect to='/'/>
      </Switch>
    )
  }

  return (
    <QuestionState>
      <CreateQuizState>
        <BrowserRouter>
          <Drawer showNavBar={showNavBar} setShowNavBar={setShowNavBar} isLogin={isLogin}/>
          {showNavBar ? <Backdrop showNavBar={showNavBar} setShowNavBar={setShowNavBar}/> : null}
          { routes }
          <button onClick={logout}>выйти</button>
        </BrowserRouter>
      </CreateQuizState>
    </QuestionState>
  );
}

export default App;
