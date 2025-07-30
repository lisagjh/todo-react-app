import "../../styles/components/_toDoList.scss";
import { useState } from "react";

export default function ToDoList(){
    const [taskList, setTaskList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function addTask(newTask){
        if (newTask.trim() !== "") {
            setTaskList([...taskList, newTask]);
        }

        console.log(taskList);
    }
    
    // on submit, prevent default, add new task, reset input field
    function handleSubmit(e){
        e.preventDefault();
        addTask(inputValue);
        setInputValue(""); // reset input field
      };


    return(
        <>
            <form onSubmit={handleSubmit} className="todo__form">
                <label htmlFor="new-todo" className="visually-hidden">
                    New task
                    <input
                        type="text"
                        id="new-todo"
                        name="new-todo"
                        placeholder="Add new task"
                        className="todo__input"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </label>

                <button type="submit" className="todo__button__submit">
                    +
                </button>
            </form>

            {taskList.length > 0 ? (
                <ul> 
                    {taskList.map((task, index) => (
                        <li className="todo__task" key={index}>
                            {task}
                            <div className="buttons">
                                <button className="todo__task__button">x</button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : 'No tasks yet'}
            
        </>
    )
}