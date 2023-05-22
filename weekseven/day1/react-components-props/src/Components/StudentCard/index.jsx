/* eslint-disable react/prop-types */
function StudentCard(props){
    return(<div>
        <p>
        Name: {props.name}
        </p>
        <p>
        Cohort: {props.info.city} - {props.info.course}
        </p>
        <p>
        Current Week: {props.week}
        </p>
</div>)
}

export default StudentCard;