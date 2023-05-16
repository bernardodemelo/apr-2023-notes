function takeWhile (arr, pred) {
  // if function.name is "isEfven"
  if (pred.name === "isEven"){
    let result = [];
    for(let i=0; i<arr.length; i++){
      if(pred(arr[i])){ // if the return of the function is true
        result.push(arr[i]);
      }
      else{
        break; // once it finds a different condition, break.
      }
    };
    
    let resultUnique = [...new Set(result)]; // create an 
    // array with unique values
    return resultUnique;
  }
  else if (pred.name === "isOdd"){
    let result = [];
    for(let i=0; i<arr.length; i++){
      if(pred(arr[i])){
        result.push(arr[i]);
      }
      else{
        break;
      }
    };
    let resultUnique = [...new Set(result)];
    return resultUnique;
  }
}