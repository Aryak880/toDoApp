import {useState} from 'react'


const TaskCard = (props) => {
    const [style, setStyle] = useState(false)
    const textDecoration = style && 'line-through';

    return(
        <div className="taskCard">
            <input type="checkbox" readOnly checked={style} onClick={() => setStyle(!style)}/>
            <p className="task-text" style={{textDecoration: textDecoration}}><h4>Task:</h4>{props.text} <br /> <h4>Time and Date:</h4>{props.time}</p>
            <button onClick={() => props.handleDelete(props.time)}>Delete</button>
        </div>
    )
}


export default TaskCard
