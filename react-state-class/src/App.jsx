import './App.css';
import Counter from "./Counter";
import LikeButton from "./LikeButton";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
import Lottery from './Lottery';

function App() {
  return (
  <>
  <Lottery n={3} winningSum={15}/>
  </>
   );
}

export default App
