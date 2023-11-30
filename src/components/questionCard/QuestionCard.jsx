import React, { useEffect, useState } from 'react'
import './QuestionCard.css'

const QuestionCard = ({questionsData, score, setScore, count, setCount, modal, setModal}) => {
    const [timer, setTimer] = useState(30);

  // bu approvedChoice fonksyion buton olduğu için ve value si olduğu için bir event alacaktır
    const approvedChoice = (e) => {  
        console.log(e.currentTarget.value)
        //verdiğin cevap ile sorudaki cevap doğruysa true dön
        const checkAnswer = e.currentTarget.value == questionsData[count]?.correct_answer
        console.log(checkAnswer)
        // eğer checkAnswer true ise
        if(checkAnswer){ 
            // scoru 10 artır
            setScore(score + 10) 
        }
        // click yapıldıktan sonra bir diğer soruya geçilsin
        setCount(count + 1)
        //eğer son soruya gelindiyse setModal ı true yap ki farklı bir sayfa render edilsin
        if(count == 9) setModal(true)
        //soruyu geçtikten sonra timer tekrar 30 a setlensin
        setTimer(30) 
    }

    // Counter ın sayfa yüklendikten sonra azalması için useEffect kullanılabilir
    useEffect(() => {
        //setInterval fonksiyonu, belirli aralıklarla çalışan bir zamanlayıcı oluşturur
        const interval = setInterval(() => {
            if(timer > 0){
                setTimer(timer-1);
            }
            //eğer süre 0 olursa ve son soruya gelinmemişse soruyu değiştir
            //ve timer ı 30 setle
            if(timer == 0 && count < 10) {
                setCount(count+1)
                setTimer(30)
            }else if(count >= 10){
                setModal(true)
            }
        }, 1000); // saniye başına azalacak (1000ms) 1 saniye

        // clearInterval ve temizleme işlemi, bellek sızıntılarını önlemek 
        //ve gereksiz interval'ların çalışmasını engellemek için önemlidir
        return () => {
            clearInterval(interval)
        }
    }, [timer])//useEffect i tetiklemek için timerı kullan
  
    return (
    <div className='questionCard'>
        <div className='questionCard-timer'>{timer}</div>
        <div className='questionCard-title'>{count + 1}/10 - {questionsData[count]?.question}</div>
        {
            questionsData[count]?.answers?.map((answer,i) => (
                <button onClick={approvedChoice} key={i} value={answer}>{answer}</button>
            ))
        }
    </div>
  )
}

export default QuestionCard