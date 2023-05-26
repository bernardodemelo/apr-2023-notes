import axios from 'axios';
import {useState} from 'react'; 
import {useNavigate} from 'react-router-dom';

// Create in React
// 1) Create a Form 
// 2) Store Data in the State
// 3) handle input value (when changed) with state
// 4) Submit, and POST request with AXIOS
// 5) Navigate

function AddApartmentPage() {
  // Write State 
  const [headline, setHeadline] = useState("");
  const [price, setPrice] = useState(1);
  const navigate = useNavigate();

  const handleTitleInput = e => setHeadline(e.target.value);
  const handlePriceInput = e => setPrice(e.target.value);

  const handleSubmit = (e) =>{
    // Prevent default operation of Form
    e.preventDefault();
    // Create the body Object to POST request. 
    // On Backend, it will be read as req.body.
    const body = {title: headline, pricePerDay: price};

    // Axios 'post' request 
    axios.post("https://ironbnb-m3.herokuapp.com/apartments", body)
    .then((response)=>{
        setHeadline("");
        setPrice(1);
        navigate('/'); // => redirects to Home Page
    })

  }

  return (
    <div>
    <form onSubmit={handleSubmit}>

        <label>Title</label>
        <input type="text" name="headline" value={headline} 
        onChange={handleTitleInput}/>

        <label>Price per day</label>
        <input type="number" name="pricePerDay" value={price}
        onChange={handlePriceInput}/>

        <button type="submit">Create Apartment</button>
    </form>
    </div>
  )
}

export default AddApartmentPage