function Summary(props){
    const {tasksCompleted} = props; 

    return(
        <div>
            <h1>Tasks Completed:</h1>
            <h1>{tasksCompleted}</h1>
        </div>
    )
}

export default Summary;