/* let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1]= 'dsds'
// Only change code above this line
console.log(myArray); */
/* function mixedNumbers(arr) {
	// Only change code below this line
 arr.unshift('I', 2, 'three')
 arr.push(7, 'VIII', 9)
	// Only change code above this line
	return arr;
 }
 
 console.log(mixedNumbers(['IV', 5, 'six'])); */
/* function popShift(arr) {
	let popped = arr.pop(1) // Change this line
	let shifted = arr.shift(1) // Change this line
	return [shifted, popped]
}

console.log(popShift(['challenge', 'is', 'not', 'complete']))
 */
/* const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1,4)
// Only change code above this line
console.log(arr); */

/* 
function htmlColorNames(arr) {
	// Only change code below this line
	arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
	// Only change code above this line
	return arr
}

console.log(
	htmlColorNames([
		'DarkGoldenRod',
		'WhiteSmoke',
		'LavenderBlush',
		'PaleTurquoise',
		'FireBrick',
	])
)
 */

/* function forecast(arr) {
	// Only change code below this line
 let newArr = arr.slice(2,4)
	return newArr;
 }
 
 // Only change code above this line
 console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); */
/*  function copyMachine(arr, num) {
	let newArr = [];
	while (num >= 1) {
	  // Only change code below this line
 
 newArr.push([...arr])
	  // Only change code above this line
	  num--;
	}
	return newArr;
 }
 
 console.log(copyMachine([true, false, true], 2)); */
/*  function spreadOut() {
	let fragment = ['to', 'code'];
	let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
	return sentence;
 }
 
 console.log(spreadOut()); */
/*  function quickCheck(arr, elem) {
	// Only change code below this line
	if (arr.indexOf(elem) === -1){return false}
 return true
	// Only change code above this line
 }
 
 console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'))

quickCheck([3, 5, 9, 125, 45, 2], 125) // return true

console.log([125].indexOf(125))
 */
/* function filteredArray(arr, elem) {
	let newArr = []
	// Only change code below this line
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i]
		console.log(element)
		if (element.includes(elem)) {
		} else {
			newArr.push(element)
		}
	}
	// Only change code above this line
	return newArr
}

console.log(
	filteredArray(
		[
			[3, 2, 3],
			[1, 6, 3],
			[3, 13, 26],
			[19, 3, 9],
		],
		3
	)
)
console.log(
	filteredArray(
		[
			['amy', 'beth', 'sam'],
			['dave', 'sean', 'peter'],
		],
		'peter'
	)
) // [["amy", "beth", "sam"]]
 */
