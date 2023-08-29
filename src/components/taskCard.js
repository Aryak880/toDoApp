
const TaskCard = (props) => {
    const textDecoration = props.completed && 'line-through';

    return(
        <div className="taskCard">
            <input type="checkbox" readOnly checked={props.completed} onClick={() => props.handleComplete(props.time)}/>
            <p className="task-text" style={{textDecoration: textDecoration}}><h4>Task:</h4>{props.text} <br /> <h4>Time and Date:</h4>{props.time}</p>
            <button onClick={() => props.handleDelete(props.time)}>Delete</button>
        </div>
    )
}


export default TaskCard
