import React,{ useContext,useState } from 'react'
import QuestionItem from './QuestionItem'
import { QuestionContext } from "../context/question";

const QuestionList = () => {
    const [questions] = useContext(QuestionContext)

    const displayquestions= questions.map(question=> 
        <QuestionItem
        key={question.id}
        questions={question}
        />)
    // const currentQuestionSetUP=<QuestionItem
    // key={questions.id}
    // questions={currentQuestion}
    // AnsweredQuestion={handleQuestionAnswered}
    // />


    
    return (
        <div>
            {displayquestions}
        </div>
    )
}

export default QuestionList
