import './App.css';
import Counter from "./Counter";
import LikeButton from "./LikeButton";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
import Lottery from './Lottery';
import { sum } from './helper';

function App() {
  let winCondition = (ticket) => {
    //return sum(ticket) === 15; // ticket will be sum of 15 then you will be winner
    // return ticket[0] === 0; // first number 0 for winning
    return ticket.every((num) => num === ticket[0]); // every number should be same then you can win
  };

  return (
  <>
  <Lottery n={3} winCondition={winCondition}/>
  </>
   );
}

export default App
