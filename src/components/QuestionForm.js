import React, { useState,useContext } from "react";
import { QuestionContext } from "../context/question";

const QuestionForm = () => {

    const [questions, setQuestions] = useContext(QuestionContext)

    function handleAddQuestions(newQuestion){
    
        setQuestions([...questions, newQuestion])
      }


    const [newQuestionData,setNewQuestionData]=useState({
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: 0
    });

    function handleChange(event){
        setNewQuestionData({
            ...newQuestionData,
            [event.target.name]:event.target.value
        });
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(newQuestionData);
        const newQuestion={
          id:questions.id+1,
          question:newQuestionData.question,
          answers:[newQuestionData.answer1,newQuestionData.answer2,newQuestionData.answer3,newQuestionData.answer4],
          correctAnswer:newQuestionData.correctAnswer
        }
        console.log(newQuestion)

        fetch("http://localhost:4000/questions",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newQuestion),
          })
          .then((r) => r.json())
          .then((newQuestion) => handleAddQuestions(newQuestion))

    }
    return (
   
    <div className = "form-style-2">
       <h1 className="form-title">New Question</h1>
       <form className="container" onSubmit={handleSubmit}>
         <label>Question:
            <input
            type="text"
            name="question"
            value={newQuestionData.question}
            onChange={handleChange}/>
        </label>
        <label> Answer 1:
            <input
            type="text"
            name="answer1"
            value={newQuestionData.answer1}
            onChange={handleChange}/>
        </label>
        <label> Answer 2:
            <input
            type="text"
            name="answer2"
            value={newQuestionData.answer2}
            onChange={handleChange}/>
        </label>
        <label> Answer 3:
            <input
            type="text"
            name="answer3"
            value={newQuestionData.answer3}
            onChange={handleChange}/>
        </label>
        <label> Answer 4:
            <input
            type="text"
            name="answer4"
            value={newQuestionData.answer4}
            onChange={handleChange}/>
        </label><label>
         Correct Answer:
             <select
               name="correctAnswer"
               value={newQuestionData.correctAnswer}
               onChange={handleChange}>
              <option value="0">{newQuestionData.answer1}</option>
              <option value="1">{newQuestionData.answer2}</option>
              <option value="2">{newQuestionData.answer3}</option>
              <option value="3">{newQuestionData.answer4}</option>
             </select>
        </label>
        <button className="btnS" type="submit">Add Question</button>
        </form>
    </div>

       
    )
}

export default QuestionForm
