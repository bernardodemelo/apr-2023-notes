function anagramCounter (wordsArray) {
  let counter = 0; 
  
  // Sorting the Characters inside a Word
  let sortedArray = wordsArray.map(element=>{
  let arr = element.split('');
  let sorted = arr.sort();
  return sorted.join('');
  }); 
  
  // For Loop inside For Loop, in order to compare the words
  for(let i= 0; i<sortedArray.length; i++){
    for(let p=0; p<sortedArray.length; p++){
      if(sortedArray[i]===sortedArray[p] && p>i){
        counter ++
      }
    }
  }
  
  return counter;
}