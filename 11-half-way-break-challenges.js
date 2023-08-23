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

