import React,{createContext,useState,useEffect} from "react";

const QuestionContext = createContext()

function QuestionProvider({children}){
    const [questions,setQuestions]=useState([])
    useEffect(() =>{
        fetch("http://localhost:4000/questions")
        .then((res)=>res.json())
        .then((data)=> setQuestions(data))
      },[])
      const value= [questions,setQuestions]
     
    return(
        <QuestionContext.Provider value={value}>
            {children}
        </QuestionContext.Provider>
    )
}

export {QuestionContext,QuestionProvider}