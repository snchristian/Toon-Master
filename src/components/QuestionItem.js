import React from "react";
function QuestionItem ({questions,AnsweredQuestion}){
    const { id, question, answers, correctAnswer} = questions;
    
    function handleAnswer(isCorrect) {
        AnsweredQuestion(isCorrect);
      }
    
 return(
     <>  
     <h1>Question {id}</h1>
     <h2>{question}</h2>
     {answers.map((answer,index)=> {
         const isCorrect = index === correctAnswer
         return(
             <button key={answer} onClick={() => handleAnswer(isCorrect)}>{answer}</button>
         )
        }
     )}
     
     
     </>
    
     
 )

}

export default QuestionItem;

