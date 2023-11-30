import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../../api/api'
import './Quiz.css'
import QuestionCard from '../../components/questionCard/QuestionCard'
import Modal from '../../components/modal/Modal'

const Quiz = () => {
  const {difficulty, amount} = useParams();
  // apiden gelen sonuçları ekranda tutmak için questionsData state i tanımlıyoruz
  const [questionsData, setQuestionsData] = useState([])  
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)
  // modal yapısı true olduğunda quiz bitti diğer sayfaya geç olarak tanımlanır
  const [modal, setModal] = useState(false) 

  useEffect(() => {
    const getData = async() => {
      const data = await api.fetchQuizData(difficulty, amount);
      setQuestionsData(data);
    }
    getData();
  }, [])

  console.log(questionsData, "questionsData")
  
  return (
    <div className='quiz'>
      {
        modal ? <Modal score={score}/> : <QuestionCard
        questionsData={questionsData}
        score = {score}
        setScore = {setScore}
        count = {count}
        setCount = {setCount}
        modal = {modal}
        setModal = {setModal}
      />
      }
      
    </div>
  )
}

export default Quiz