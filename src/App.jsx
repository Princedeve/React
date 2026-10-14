import "./App.css";
import {Title} from "./Title.jsx";
import {ProductTab} from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

function Description(){
  return <p>I am the Description</p>
}

function App() {
  return (
    <>
    <MsgBox userName="Prince" textColor="yelloW"/>
      <Title />
      <ProductTab />
      <Description/>
      <button>Hello, World!</button>
    </>
  );
}

export default App;
