import React from 'react'
import {Link} from "react-router-dom";
import classes from './Drawer.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

function Drawer({showNavBar, setShowNavBar, isLogin, logout}) {

  const cls = [classes.Drawer]

  if (showNavBar) {
    cls.push(classes.show)
  } else {
    cls.push(classes.hide)
  }

  let links = (
    <>
      <li onClick={() => setShowNavBar(showNavBar = !showNavBar)}><Link to='/'>Главная</Link></li>
      <li onClick={() => setShowNavBar(showNavBar = !showNavBar)}><Link to='/auth'>Авторизация</Link></li>
    </>
  )

  if (isLogin){
    links = (
      <>
        <li onClick={() => setShowNavBar(showNavBar = !showNavBar)}><Link to='/'>Главная</Link></li>
        <li onClick={() => setShowNavBar(showNavBar = !showNavBar)}><Link to='/createQuiz'>Создать тест</Link></li>
        <li onClick={() => setShowNavBar(showNavBar = !showNavBar)}><Link to='/logout'>Выйти</Link></li>
      </>
    )
  }

  return (
    <div className={cls.join(' ')}>
      <button onClick={() => setShowNavBar(showNavBar = !showNavBar)}><FontAwesomeIcon icon={faArrowRight}/></button>
      <nav>
        <ul>
          {links}
        </ul>
      </nav>
    </div>
  )
}

export default Drawer