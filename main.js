// Clone ArrayOfCars Repo.
// Inside the file called main.js complete each of the following exercises.

// .length
// Create an array called cars which consists of 4 different types of cars as String type. The first car type should be Ford and includes Honda.
var cars = ['Ford', 'Saab', 'Honda', 'Toyota']
// Console.log the length of the array.
console.log(cars.length)
// Use node main.js to run the program.

// .concat()
// Create another array called moreCars with 4 more different types of cars. The last car type should be Honda.
var moreCars = ['Nissan', 'Cadillac', 'Volvo', 'Honda']
// Use the concat method to combine the cars and moreCars arrays into another array called totalCars.
let totalCars = cars.concat(moreCars);
console.log(totalCars)
// Run the program.

// .indexOf() and .lastIndexOf()
// Use the indexOf method to console.log the index of Honda.
totalCars.indexOf('Honda')
console.log(totalCars.indexOf('Honda'));
// Use the lastIndexOf method to console.log the index of Ford.
totalCars.lastIndexOf('Ford');
console.log(totalCars.lastIndexOf('Ford'));
// Run the program.

// .join()
// Use the join method to covert the array totalCars into a string called stringOfCars.
let stringOfCars = totalCars.join();
console.log(totalCars.join());
// Run the program.

// .split()
// Use the split method to convert stringOfCars back intro an array called totalCars.
totalCars = stringOfCars.split(',');
console.log(totalCars);
// Run the program.

// .reverse()
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
const carsInReverse = totalCars.reverse();
console.log(carsInReverse);
// Run the program.

// .sort()
// Use the sort method to put the array carsInReverse into alphabetical order.
carsInReverse.sort();
console.log(carsInReverse);
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction:
//console.log(carsInReverse.indexOf('Caddilac'));

// Run the program.

// .slice()
// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.

let removedCars = carsInReverse.slice(1, 4)
console.log(removedCars)

// .splice()
// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse 
//and add Ford and Honda in their place.
console.log(carsInReverse)
let splicedArray = carsInReverse.splice(1, 2, 'Ford', 'Honda')
carsInReverse.splice(1, 2, 'Ford', 'Honda')
console.log(carsInReverse)

// .push()
// Use the push method to add the types of cars that you removed using the splice 
//method to the carsInReverse array.

carsInReverse.push(splicedArray[0])
carsInReverse.push(splicedArray[1])
console.log(carsInReverse)

// .pop()
// Use the pop method to remove and console.log the last item in the array 
//carsInReverse.

console.log(carsInReverse.pop())
carsInReverse.pop()
// .shift()
// Use the shift method to remove and console.log the first item in the array 
//carsInReverse.
let shiftedArray = carsInReverse.shift()
carsInReverse.shift()
console.log(shiftedArray)

// .unshift()
// Use the unshift method to add a new type of car to the array carsInReverse.
carsInReverse.unshift('Mercades')
console.log(carsInReverse)
// .forEach()

let numbers = [23, 45, 0, 2]

function addTwo(arr) {
  for (i = 0; i < arr.length; i++){
  arr[i] = arr[i] + 2
   
  
}
}

//addTwo(numbers)
console.log(numbers)
// Create an array called numbers with the following items: 23, 45, 0, 2. Write 
//code that will add 2 to each item in the array numbers.

// .forEach() requires a function to be passed into it as its first argument.
numbers.forEach(function addTwo(item, index, arr) {
  
    arr[index] = arr[index] + 2
    
})
console.log(numbers)
//Build a function that will add 2 and then use .forEach() to pass each number into your 
//freshly built function. const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]