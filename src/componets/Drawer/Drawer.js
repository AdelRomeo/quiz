import React from 'react'
import {Link} from "react-router-dom";
import classes from './Drawer.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

function Drawer({showNavBar, setShowNavBar}) {

  const cls = [classes.Drawer]

  if (showNavBar) {
    cls.push(classes.show)
  } else {
    cls.push(classes.hide)
  }

  return (
    <div className={cls.join(' ')}>
      <button onClick={() => setShowNavBar(showNavBar = !showNavBar)}><FontAwesomeIcon icon={faArrowRight}/></button>
      <nav>
        <ul>
          <li onClick={() => setShowNavBar(showNavBar = !showNavBar)}><Link to='/'>Home</Link></li>
          <li onClick={() => setShowNavBar(showNavBar = !showNavBar)}><Link to='/auth'>Auth</Link></li>
          <li onClick={() => setShowNavBar(showNavBar = !showNavBar)}><Link to='/createQuiz'>Create Quiz</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Drawer