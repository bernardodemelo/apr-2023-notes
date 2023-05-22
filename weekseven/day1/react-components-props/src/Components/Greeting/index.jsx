function Greeting (props){
    return(
        <div>
            <p style={{color: props.textColor}}>Hello {props.firstName}</p>
        </div>
    )
}

export default Greeting;