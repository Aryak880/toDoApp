import React, {useState, useEffect} from 'react'
import TaskCard from './taskCard'
import './components.css'

const ToDoFunction = () => {
    const [text, setText] = useState('')
    const [taskArray, setTaskArray] = useState(localStorage.getItem('taskArray') ? JSON.parse(localStorage.getItem('taskArray')) : [])

    useEffect(() => {
        const temp = JSON.stringify(taskArray)
        localStorage.setItem('taskArray', temp)
    }, [taskArray])

    const handleDelete = (time) => {
        const latestTask = taskArray.filter(e => e.time !== time)
        setTaskArray(latestTask)
    }
    
    const inputHandler = (event) => {
        setText(event.target.value)
    }

    const submitHandler = (event) => {
        const newTime = new Date().toUTCString()
        event.preventDefault()
        setText(event.target.value)

        const newTask = {
            text: text,
            time: newTime,
            completed: false
        }
        setTaskArray([...taskArray, newTask])
        setText('')
    }

    let tasks = taskArray.map(e => <TaskCard key={e.time} time={e.time} text={e.text} handleDelete={handleDelete}/>)

    return (
        <div className="container">
            <div className="inputCard">
                <form onSubmit={submitHandler}>
                    <input type="text" value={text} id="inputTask" placeholder="Enter your task" onChange={inputHandler}/>
                    <button id="Submit" disabled={!text.length}>Submit</button>
                </form>
            </div>
            <div className="task-container"> {
                tasks
            }
            </div>   
        </div>
    )
}

export default ToDoFunction
