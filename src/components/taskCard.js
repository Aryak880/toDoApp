
const TaskCard = (props) => {
    const textDecoration = props.completed && 'line-through';

    return(
        <div className="taskCard">
            <div className="taskCard-text-container">
                <div className="task innerTaskBlock">
                    <h4>Task: {props.order}</h4>
                    <p className="task-text" style={{textDecoration: textDecoration}}>{props.text}</p>
                </div>
                {/* <div className="time innerTaskBlock">
                    <h4>Time</h4>
                    <p className="date-and-time"><i>{props.time}</i></p>
                </div> */}
            </div>

            <div className="checbox-and-button">
                <div>
                    <label for="checkbox">Completed</label>
                    <input type="checkbox" name="chekbox" readOnly checked={props.completed} onClick={() => props.handleComplete(props.time)}/>
                </div>
                <button onClick={() => props.handleDelete(props.time)}>Delete</button>
            </div>
        </div>
    )
}


export default TaskCard
