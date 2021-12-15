import React,{ useContext,useState } from 'react'
import QuestionItem from "./QuestionItem"
import { QuestionContext } from "../context/question";

function Question(){
  
  
  const [questions] = useContext(QuestionContext)
  const [currentQuestionId, setCurrentQuestion] = useState(1)
  const [score, setScore] = useState(0);
  const currentQuestion = questions.find((q) => q.id === currentQuestionId)

  function handleQuestionAnswered(correct) {
    if (currentQuestionId < questions.length) {
      setCurrentQuestion((currentQuestionId) => currentQuestionId + 1);
    } else {
      setCurrentQuestion(null);
    }
    if (correct) {
      setScore((score) => score + 1);
    }
  }

      return(
      <main>
           <div>
            <button className="">View Questions</button>
            {currentQuestion ? <QuestionItem
    key={questions.id}
    questions={currentQuestion}
    AnsweredQuestion={handleQuestionAnswered}/>:(
        <>
          <h1>Game Over</h1>
          <h2>Toon Master Rank: {score}</h2>
        </>
      )}
        </div>
      </main>)
      
    }

    export default Question;