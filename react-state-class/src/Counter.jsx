import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0); //initialization
    console.log("Component is rendered");
    console.log(`count = ${count}`);

    let incCount = () =>{
        setCount(count+1);
        console.log(`inside incCount, count = ${count}`);
    };

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increment Count</button>
        </div>
    )
}