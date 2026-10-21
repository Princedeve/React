import { useState } from "react";

export default function TodoList() {
    let [tasks, setTasks] = useState(["Sample Task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTasks([...tasks, newTodo]);
        setNewTodo("");
    };
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    return (
        <div>
            <input placeholder="Add a Task" value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
                {
                    tasks.map((task) => (
                       <li>{task}</li>
                    ))
                }
            </ul>
            
        </div>
    )
}