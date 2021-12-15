
import Navbar from './Navbar';
import Home from './Home'
import { Route, Switch } from "react-router-dom";
import Question from './Question';
import QuestionForm from './QuestionForm';
import QuestionList from "./QuestionList"

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Switch>
       <Route exact path="/"> <Home/></Route>
       <Route exact path="/question"><Question/></Route>
       <Route exact path="/questionForm"><QuestionForm/></Route>
       <Route exact path="/questionList"><QuestionList/></Route>
     </Switch>
      
    </div>
  );
}
export default App;
