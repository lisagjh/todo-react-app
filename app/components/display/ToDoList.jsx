import "../../styles/components/_toDoList.scss";
import { useState } from "react";

export default function ToDoList(){
    const [taskList, setTaskList] = useState([]);
    const [finishedTasks, setFinishedTasks] = useState([]);
    const [allTasks, setAllTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    // Filter tasks by status
    const todoTasks = allTasks.filter(task => task.status === "todo");
    const doneTasks = allTasks.filter(task => task.status === "done");

    function addTask(newTask){
        if (newTask !== "") {
            const taskObject = {
                id: Date.now(), // generate id
                text: newTask, // set text as input value
                status: "todo" // set status as todo
            };
            setAllTasks([...allTasks, taskObject]); // Voegt object toe
        }
    }
    
    function completeTask(taskId){
        setAllTasks(allTasks.map(task => 
            task.id === taskId 
                ? { ...task, status: "done" } // change status to done
                : task // leave other tasks as is
        ));
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

            {allTasks.length > 0 ? (
                <div className="todo__sections">
                    {/* Todo */}
                    {todoTasks.length > 0 && (
                        <div className="todo__section">
                            <h2>To Do ({todoTasks.length})</h2>
                            <ul className="todo__list"> 
                                {todoTasks.map((task) => (
                                    <li key={task.id}> {/* use ID as key */}
                                        <span>{task.text}</span> {/* task.text as content */}
                                        <button onClick={() => completeTask(task.id)}>v</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                ) : <p>No tasks yet</p>
            }
            
        </>
    )
}