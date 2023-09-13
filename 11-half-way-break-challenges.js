const myArray = [10, 20, 30]
myArray.pop();
myArray.push(99);
console.log(myArray)

getLastValue(['hello','foo','bar','world']);
getLastValue([1,2,3, 4, [7, 8, 9]]);
arraySwap(['hello','foo','bar','world']);


function getLastValue(array){
const lastIndex = array.length -1
console.log(array[lastIndex])
};

function arraySwap(array){
    const lastIndex = array.length -1
    array.unshift(array[lastIndex]);
    array.pop();
    array.push(array[1]);
    array.splice(1, 1);
    console.log(array)   
};

for (let i = 0; i<=10; i += 2){
    console.log(i);
  };

  let i = 0;

  while(i <= 10){
    console.log(i);
    i += 2;
    
  };

  for(let i = 5; i >= 0 ; i--){
    console.log(i);
  };

  let j = 5;

  while(j >= 0){
    console.log(j);
    j--;
      
  };
  addOneArray([10,20,30,40]);

function addOneArray(array){
  const doubleNumberArray = [];

  for(let i = 0; i < array.length; i++){
    let newNum = array[i];
    doubleNumberArray.push(newNum + 1);
    
  }
  console.log(doubleNumberArray);
};

minMax([202,20,90,100]);
minMax([]);
minMax([202,202]);


function minMax(array){
  if (array.length === 0) {
    console.log('Array is empty');
    return; // Exit the function
  }

let maxValue = array[0];
let minValue = array[0];
// needed to declare the variable first

for(let i = 0; i < array.length; i++){
 if(maxValue < array[i] ){
maxValue = array[i];
 } 
 
 if (minValue > array[i] ){
 minValue = array[i];
 }
 
}
if(maxValue === minValue){
  console.log("The max and min value is the same")
  return;

}
console.log(`Min: ${minValue} Max: ${maxValue}`)

}

countingWords(['hello', 'world', 'hello', 'world', 'cat', 'hello'])

function countingWords (array){
const wordObj = {};


for(let i = 0; i < array.length; i++){

const word = array[i];

if(!wordObj[word]){
wordObj[word] = 1;
} else {
 wordObj[word]++; 
}

}
console.log(wordObj)
}
// needs to move through the array using a for loop

// needs to identify if the word has been added to the object 

// if it hasnt add it to the object object[variable]
// if it has add one to the object property
