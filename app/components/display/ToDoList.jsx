import "../../styles/components/_toDoList.scss";
import { useState } from "react";

export default function ToDoList(){
    const [allTasks, setAllTasks] = useState([
        {id: 1, text: "Buy milk", status: "todo"},
        {id: 2, text: "Walk the dog", status: "todo"},
        {id: 3, text: "Do laundry", status: "done"},
        {id: 4, text: "Clean the house", status: "todo"}
    ]);
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
    
    function toggleTaskStatus(taskId){
        setAllTasks(allTasks.map(task => 
            task.id === taskId 
                ? { ...task, status: task.status === "todo" ? "done" : "todo" } // toggle status
                : task // leave other tasks as is
        ));
    }

    // delete task - using the .filter method to create a new array that does include the task with the ID we want to delete
    // then we set the allTasks state to the new array
    function deleteTask(taskID) {
        setAllTasks((prevTasks) => prevTasks.filter(task => task.id !== taskID));
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

                <button type="submit" className="todo__button__submit" aria-label="Submit new task">
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
                    {allTasks.length > 0 && (
                        <div className="todo__section">
                            <ul className="todo__list"> 
                                {allTasks.map((task) => (
                                    // className={isDark ? 'show header__icon' : 'header__icon'}
                                    <li key={task.id} className={task.status === "done" ? "todo__task__completed todo__task" : "todo__task"}> {/* use ID as key */}
                                        <button onClick={() => toggleTaskStatus(task.id)} aria-label="Mark task as done" className="todo__task__complete_button">
                                            {task.status === "done" ? <img src="/assets/icon-check.svg" alt="" /> : ''}
                                        </button>
                                        <span>{task.text}</span> {/* task.text as content */}
                                        <button onClick={() => deleteTask(task.id)} aria-label="Delete task" className="todo__task__delete_button">
                                            <img src="/assets/icon-cross.svg" alt="" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="todo__sections__info">
                         <p>{todoTasks.length} tasks left</p>
                         <p>{doneTasks.length} tasks done</p>
                    </div>
                </div>
                ) : <p>No tasks yet</p>
            }
            
        </>
    )
}