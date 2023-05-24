import {useState} from 'react'; 

function Task(props){
 // Destructuring Props Object
 const {task, toggleTask} = props; 

 // Write State 
 // 1) Tasks Completed
 // const [taskCompleted, setTaskCompleted] = useState(false);

 // const toggleTask = () => setTaskCompleted(!taskCompleted);
 
    return(
        <div className="task-card">
            <div>
                <h1>{task.name}</h1>
                {task.done? <p>DONE</p> : <p>PENDING ⌛</p>}
                <h2>Task Description</h2>
                <p>{task.description}</p>
                <button onClick={()=> toggleTask(task._id)}>
                    {task.done? 'Undo' : 'Completed'}
                </button>
            </div>   
        </div>
    )
}

export default Task; 