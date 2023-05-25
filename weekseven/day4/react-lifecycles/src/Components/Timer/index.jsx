import {useState, useEffect} from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    // Component is Mounting
    console.log('Component is Mounting - Initial Render');
    const id = setInterval(()=>{
        setCount((prevCount)=> prevCount+1);
    }, 1000);

    // Cleanup Function
    return ()=>{
        clearInterval(id);
        // Component will UnMount
        console.log('Oh my god, sadly destroyed this component #cryingemoji');
    }
  }, []); // have a side-effect of component being mounted; 

  useEffect(()=>{
     document.title = count;
  }, [count]); //have a side-effect of changing count state variable

  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default Timer;