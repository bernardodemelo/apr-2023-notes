// import useState React Hook from React
import {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    return(<div className="counter">
     <h2>Counter</h2>
        <p>You clicked {count} times!</p>
        <button onClick={()=> setCount(count-1)}> - </button>
        <button onClick={()=> setCount(count+1)}> + </button>
    </div>)

}

export default Counter;