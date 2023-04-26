function namesSorter (departmentsArray) {
    // Variable Declaration
    let arr = [];
  
    //Push Every 2D-Element to a New Array
    departmentsArray.forEach((element)=>{
      element.forEach((string)=>{
        arr.push(string);
      })
    });
    
    // Sort by lenght or (if they have the same lenght), alphabetically
    arr.sort(function(a, b){
    return a.length - b.length || a.localeCompare(b); 
    });
    
    return arr;
  }