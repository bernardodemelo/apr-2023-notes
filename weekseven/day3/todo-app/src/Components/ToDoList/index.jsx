// Import useState Hook from React Package
import {useState} from 'react'

import Task from '../Task';
import Summary from '../Summary';

// Data File 
const initialTasks= [
    {
        _id: '1a',
        name: 'Task1',
        description: 'Do something important',
        done: false,
      },
      {
        _id: '2b',
        name: 'Task2',
        description: 'Do something important',
        done: false,
      },
      {
        _id: '3c',
        name: 'Task3',
        description: 'Do something important',
        done: false,
      }
];

// Functional React Component
function ToDoList() {
  // Write State 
  // 1) State that Stores Tasks 
  const [tasks, setTasks] = useState(initialTasks);
  // 2) State that Stores completed tasks
  const [tasksCompleted, setTasksCompleted] = useState(0);

  // React Hooks - useState
  // const [stateVariable, stateUpdateFunction]= useState(defaultValue)

  // stateVariable = 1; => NOT BUENO
  // stateUpdateFunction(1);

  // Solution
  const toggleTask = (taskId) =>{
    // Create a Copy of the Tasks Array
    const tasksCopy = [...tasks];

    tasksCopy.forEach((task)=>{
        if(taskId === task._id){
            task.done = !task.done;
            if(task.done){
                setTasksCompleted(tasksCompleted + 1);
            } else{
                setTasksCompleted(tasksCompleted - 1);
            }
        }
    });

    setTasks(tasksCopy);
  };


  return (
    <div>
    <Summary tasksCompleted={tasksCompleted}/>
    {tasks.map((task)=>(
        <Task key={task._id} task={task} toggleTask={toggleTask}/>
    )
    )}
    </div>
  )
}

export default ToDoList