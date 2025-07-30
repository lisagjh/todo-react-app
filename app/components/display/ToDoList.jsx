import "../../styles/components/_toDoList.scss";
import { useState } from "react";

export default function ToDoList(){
    const [taskList, setTaskList] = useState([]);
    const [finishedTasks, setFinishedTasks] = useState([]);
    const [allTasks, setAllTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function addTask(newTask){
        if (newTask !== "") {
            setTaskList([...taskList, newTask]);
        }
        console.log(taskList);
    }
    
    function completeTask(index){
        const task = taskList[index];
        setTaskList(taskList.filter((_, i) => i !== index));
        setFinishedTasks([...finishedTasks, task]);
    }
    
    // on submit, prevent default, add new task, reset input field
    function handleSubmit(e){
        e.preventDefault();
        addTask(inputValue);
        setInputValue(""); // reset input field
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="todo__form">
                <label htmlFor="new-todo" className="visually-hidden">
                    New task
                </label>

                <button type="submit" className="todo__button__submit" aria-label="Add new task">
                </button>

                <input
                    type="text"
                    id="new-todo"
                    name="new-todo"
                    placeholder="Create a new todo..."
                    className="todo__input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </form>

            {taskList.length > 0 ? (
                <ul className="todo__list"> 
                    {taskList.map((task, index) => (
                        <li className="todo__task" key={index}>
                            <div className="buttons">
                                <button 
                                    className="todo__task__button" 
                                    onClick={() => completeTask(index)}
                                    aria-label="Complete task">
                                </button>
                            </div>
                            
                            {task}
                            
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="todo__empty">No tasks yet</p>
            )}
            
        </>
    )
}