const arrayTest1 = ["hello", "search", "dog", "world", "dog", "cat"];
const arrayTest2 = ["how", "do", "you", "do", "mayor", "marley"];
const arrayTest3 = ["hello", "see", "how", "search", "dog", "search"];
const arrayTest4 = ["egg", "egg", "dog", "tomato", "egg", "cucumber"];
const arrayTest5 = ["egg", "salad", "ham", "egg", "dog", "egg"];
const arrayTest6 = ["egg", "egg", "fish", "lettuce", "egg", "egg"];

function findSearch(array) {
  let index = -1;

  for (i = 0; i < array.length; i++)
    if (array[i] === "search") {
      index = i;
      break;
    }
  console.log(index);
}

findSearch(arrayTest1);
findSearch(arrayTest2);
findSearch(arrayTest3);

function findWordArray(array, word) {
  let index = -1;

  for (i = 0; i < array.length; i++)
    if (array[i] === word) {
      index = i;
      break;
    }
  if (array[i] === word) {
    console.log(`"${word}" found at position: ${index}`);
  } else {
    console.log(`"${word}" not found!`);
  }
}

findWordArray(arrayTest1, "dog");
findWordArray(arrayTest2, "do");
findWordArray(arrayTest3, "drako");

function removeEggs(array) {
  let egglessArray = [];

  for (i = 0; i < array.length; i++)
    if (array[i] === "egg") {
      continue;
    } else {
      egglessArray.push(array[i]);
    }
  console.log(egglessArray);
}

// removeEggs(arrayTest4);
// removeEggs(arrayTest5);
// removeEggs(arrayTest6);


function removeLastTwoEggs(array) {
    let twoEgglessArray = [];
    let eggCounter = 2;
    array.reverse();
    // remove above line to remove first two eggs
    for (i = 0; i < array.length; i++)
      if (array[i] === "egg" && eggCounter > 0 ) {
        eggCounter--;
        continue;
        
      } else {

        twoEgglessArray.push(array[i]);
      }
      twoEgglessArray.reverse();
      // remove above line to remove first two eggs
    //   reverse reverses the order of the Array
    console.log(twoEgglessArray);
  }
  
//   removeLastTwoEggs(arrayTest4);
//   removeLastTwoEggs(arrayTest5);
//   removeLastTwoEggs(arrayTest6);
  
  function removeLastTwoEggsSlice(array) {
    let twoEgglessArray = [];
    let originalArray = array.slice();
    let eggCounter = 2;
    array.reverse();
    // remove above line to remove first two eggs
    for (i = 0; i < array.length; i++)
      if ( array [i] === "egg" && eggCounter > 0 ) {
        eggCounter--;
        continue;
        
      } else {

        twoEgglessArray.push(array[i]);
      }
      twoEgglessArray.reverse();
      // remove above line to remove first two eggs
    //   reverse reverses the order of the Array
    console.log(`new array: ${twoEgglessArray}`);
    console.log(`old array: ${originalArray}`)
  }

  removeLastTwoEggsSlice(arrayTest4);
  removeLastTwoEggsSlice(arrayTest5);
  removeLastTwoEggsSlice(arrayTest6);

  function fizzBuzz(){
  for(i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0 ){
    console.log("FizzBuzz")}
    else if(i % 3 === 0){
      console.log("Fizz")}
    else if(i % 5 === 0){
      console.log("Buzz")
    } else {console.log(i);
    }
    
  }
}
fizzBuzz();