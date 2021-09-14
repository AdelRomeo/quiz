import React, {useContext} from 'react'
import classes from "./Select.module.scss";
import CreateQuizContext from "../../context/createQuiz/createQuizContext";

function Select({config}) {

  const {setRightAnswerId} = useContext(CreateQuizContext)

  const {label, options} = config

  return (
    <div className={classes.selectContainer}>
      <label htmlFor="rightAnswerId">{label}</label>
      <select id='rightAnswerId' onChange={(event) => setRightAnswerId(event.target.value)}>
        {Object.keys(options).map((option) => {
          return (
            <option value={options[option]} key={options[option]}>{options[option]}</option>
          )
        })}
      </select>
    </div>
  )
}

export default Select