const numbersList = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>];

// rfce -> snippet to create functional exportable react components 

function SimpleList() {

  const webDevTeachers = ['Bernardo', 'Bruno', 'Joao', 'Miguel', 'Lucia', 'Chico'];

  return (
    <div>
    <ol>
        {/*numbersList.map((element)=>{
            return element;
        })*/}
        {webDevTeachers.map((element, index)=>{
            return <li key={index}> {element}</li>
        })}
    </ol>
    </div>
  )
}

export default SimpleList