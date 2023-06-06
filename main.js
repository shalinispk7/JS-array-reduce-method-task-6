
// Using reduce method

let numbers = [1, 2, 3, 4, 5];
let result = numbers.reduce(function(acc,cv){
	return acc + cv*2;
},10)
document.write("Elements stored in the array are "+numbers)
document.write("<br>")
document.write(`Using Reduce method.Output of the given array is ${result}`);


