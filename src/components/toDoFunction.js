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

    const saveSortedTask = (arr) => {
        const newShorted = arr.sort((a,b) => a.order - b.order)
        setTaskArray(newShorted)
    }

    const handleComplete = (data) => {
        const Index = taskArray.findIndex(e => e.time === data)
        const temp = {
            text: taskArray[Index].text,
            time: taskArray[Index].time,
            completed: !taskArray[Index].completed,
            order: taskArray[Index].order
        }
        const AA = taskArray.filter(e => e.time !== data)
        saveSortedTask([...AA, temp])
    }

    const handleDelete = (time) => {
        const latestTask = taskArray.filter(e => e.time !== time)
        saveSortedTask(latestTask)
    }
    
    const inputHandler = (event) => {
        setText(event.target.value)
    }

    const submitHandler = (event) => {
        const newTime = new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})
        event.preventDefault()
        setText(event.target.value)

        const newTask = {
            text: text,
            time: newTime,
            completed: false,
            order: taskArray.length+1
        }
        saveSortedTask([...taskArray, newTask])
        setText('')
    }

    let tasks = taskArray.map(e => <TaskCard completed={e.completed} key={e.time} order={e.order} time={e.time} text={e.text} handleDelete={handleDelete} handleComplete={handleComplete}/>)

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
