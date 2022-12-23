//Flatten An Array
const array = [1, [2, [3, 4], 5], 6];

//Recursion simply means a function that calls itself

// Basic Solution
let flatten = [];
const flattenArray = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length) {
			flatten.concat(flattenArray(arr[i]));
		}
		else flatten.push(arr[i]);
	}
	return flatten;
}
console.log(flattenArray(array));

// better
const flattenArray = (arr) => {
	let outputArr = [];
	flattenRecursion(0, arr, outputArr);
	return outputArr;
}

const flattenRecursion = (index, inputArr, outputArr) => {
	if (index >= inputArr.length) return;
	if (Array.isArray(inputArr[index])) {
		flattenRecursion(0, inputArr[index], outputArr);
	}
	else {
		outputArr.push(inputArr[index]);
	}
	flattenRecursion(index + 1, inputArr, outputArr);
}
console.log(flattenArray(array));
