// Fetch with .then() and .catch() to consume it. 
/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then((response)=>{
    return response.json();
}).then((data)=>{
    console.log("Response", data);
}).catch((err)=> console.log(err));

*/

/*
// Fetch with async and await
async function displayJoke() {
    // Tries to have a response of fulfilled promises
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const jsonResponse = await response.json();

        console.log('Response', jsonResponse);
    }
    // Catches an eventual error
    catch{
        console.log('Something went wrong!', error);
    }
}

displayJoke();
*/