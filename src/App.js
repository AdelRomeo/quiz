import React from 'react'
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from "./pages/Home/Home";
import Question from "./pages/Question/Question";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/question' component={Question}/>
          <Route path='/' exact component={Home}/>
          <Redirect to='/'/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
