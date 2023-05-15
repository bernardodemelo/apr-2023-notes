// TODO: Multiply All the Digits of a number, until found a single digit product. 
// - Should return a number as a counter of times it was needed to multiply the number 
// until found a single digit product.

// Example: case of '88', the function should return 3. Why?
//          because, 8*8 = 36. 3*6= 18. 8*1= 8 --> 3 TIMES. 

function persistence(num) {
  // Case of being given already a single digit number
  if(num <10){
    return 0;
  } 
  else 
  {
  // Variable Declaration
  let counter = 0;
  let actualNumber = num;

  // Do... while loop
  do{
  // Convert to String in order to Mulitply the Characters
  let stringNumber = actualNumber.toString();
  let multipliedNumber;
  // For Loop to Multiply the Characters
  for (let i=0 ; i<stringNumber.length; i++){
    if(i === 0){
      multipliedNumber = stringNumber.charAt(i); 
    }
    else{
      multipliedNumber *= stringNumber.charAt(i); 
    }
  }
  actualNumber = multipliedNumber;
  counter ++;
  }
  while(actualNumber>=10) // Multiply digits while number is greater than 10.

  return counter;
  }
}