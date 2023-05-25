import {useState, useEffect} from 'react';
import axios from 'axios';

const apiURL = "https://ironbnb-m3.herokuapp.com/apartments";

function Ironbnb() {
    // Write State
    // 1) Status of Fetched Data 
    const [fetching, setFetching] = useState(false);
    // 2) List of Apartments from API
    const [apartments, setApartments] = useState([]);

    useEffect(()=>{
        axios.get(apiURL).then((response)=>{
            // Listing all the apartments in State.
            setApartments(response.data);
            // Give BUENO status to Data Fetch. 
            setFetching(true);
        })
    })
  return (
    <div>
     <h3>List of Apartments</h3>
     {!fetching && <p>Loading</p> }
     { apartments.map((apartment)=>{
        return (
            <div key={apartment._id}>
                <img src={apartment.img}/>
                <h3>{apartment.title}</h3>
                <p>Price: {apartment.pricePerDay}</p>
            </div>
        )
     })}
    </div>
  )
}

export default Ironbnb