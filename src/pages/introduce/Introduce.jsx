import React, { useState } from 'react'
import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'
import { useNavigate } from 'react-router-dom'

const Introduce = () => {
  const difficulty = ["easy", "medium", "hard"]
  const[difficultyChange,setDifficultyChange] = useState('')
  const navigate = useNavigate();
  const TOTAL_QUESTIONS = 10

  console.log(difficultyChange,"difficultyChange")

  const startQuiz = ()=>{
    if(difficultyChange){
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`) //back tick lerin amacı gönderdiğimiz yapıların dinamik olması
    }
  }

  return (
    <div className='introduce'>
      <div className="introduce-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Bkx-bV8Y7oosGWM6rxIzAZdNyqNw1QaZKw&usqp=CAU" alt="" />
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange}/>
        <div onClick={startQuiz} className='introduce-btn'>Quize başla</div>
      </div>
    </div>
  )
}

export default Introduce