import React from "react";
import { NavLink } from "react-router-dom";


function Navbar(){
    return(<div>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/question" exact>Questions</NavLink>
        <NavLink to="/questionForm" exact>Join The Fun</NavLink>
        <NavLink to="/questionList" extact> QuestionList</NavLink>

    </div>)
}

export default Navbar;