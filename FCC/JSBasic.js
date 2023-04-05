/* const myStr = 'FirstLine\n\t\\SecondLine\nThirdLine' // Change this line
console.log(myStr)
 */
// Setup
/* let myStr = 'Jello World'

// Only change code below this line
myStr = 'Hello World' // Change this line
// Only change code above this line
console.log(myStr)
 */

/* // Setup
const myArray = [
	['John', 23],
	['cat', 2],
]

// Only change code below this line
myArray.push(['dog', 3])
 */

/* // Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift() */
/* 
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]) */
/* const myList = []
console.log(
	myList.concat([
		['Bread', 1],
		['Milk', 2],
		['Water', 3],
		['Chocolate', 4],
		['Cookies', 5],
	])
)
 */
/* function reusableFunction (){console.log("Hi World")}
reusableFunction () */
/* function functionWithArgs(a, b){console.log(a+b)}
functionWithArgs(1,2) */
/* function timesFive(a) {
	return a * 5
}
 */
/* // Declare the myGlobal variable below this line
const myGlobal = 10
function fun1() {
	// Assign 5 to oopsGlobal here
	oopsGlobal = 5
}

// Only change code above this line

function fun2() {
	let output = ''
	if (typeof myGlobal != 'undefined') {
		output += 'myGlobal: ' + myGlobal
	}
	if (typeof oopsGlobal != 'undefined') {
		output += ' oopsGlobal: ' + oopsGlobal
	}
	console.log(output)
} */

// Setup
/* const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
let outerWear= 'sweater'
  // Only change code above this line
  return outerWear;
}

myOutfit(); */
/* 
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
sum+=5
}

// Only change code above this line

addThree();
addFive(); */
/* 
// Setup
let processed = 0

function processArg(num) {
	return (num + 3) / 5
}

// Only change code below this line
processed = processArg(7)
 */
/* function nextInLine(arr, item) {
	// Only change code below this line
 
	arr.push(item)
	item = arr.shift()
	return item;
	// Only change code above this line
 }
 
 // Setup
 let testArr = [1, 2, 3, 4, 5,];
 
 // Display code
 console.log("Before: " + JSON.stringify(testArr));
 console.log(nextInLine(testArr, 6));
 console.log("After: " + JSON.stringify(testArr)); */

// Setup
/* function testEqual(val) {
	if (val) {
		// Change this line
	
		return 'Equal'
	}
	return 'Not Equal'
}

testEqual(10)
 */
// Setup
/* function compareEquality(a, b) {
	if (typeof a === typeof b) { // Change this line
	  return "Equal";
	}
	return "Not Equal";
 }
 
 compareEquality(10, "10"); */
// Setup
/* function testStrictNotEqual(val) {
	if (val !== 17) { // Change this line
	  return "Not Equal";
	}
	return "Equal";
 }
 
 testStrictNotEqual(10); */

/*  function testLogicalAnd(val) {
	// Only change code below this line
 
	if (val>=25 && val<=50) {
	
		 return "Yes";
	  
	}
 
	// Only change code above this line
	return "No";
 }
 
 testLogicalAnd(10); */
/*  function testLogicalOr(val) {
	// Only change code below this line
 
	if (val<10 || val>20) {
	  return "Outside";
	}
 
	// Only change code above this line
	return "Inside";
 }
 
 testLogicalOr(15);
 */
/* function orderMyLogic(val) {
	if (val < 5) {
		return 'Less than 5'
	} else if (val < 10) {
		return 'Less than 10'
	} else {
		return 'Greater than or equal to 10'
	}
}

console.log(orderMyLogic(4))
 */
/* function testSize(num) {
	// Only change code below this line
 if (num<5){return "Tiny"}
 else if (num<10){return "Small"}
 else if (num<15){return "Medium"} 
 else if(num<20){return "Large"}
 else{ return "Huge";}
  
	// Only change code above this line
 }
 
 testSize(7); */
/* const names = [
	'Hole-in-one!',
	'Eagle',
	'Birdie',
	'Par',
	'Bogey',
	'Double Bogey',
	'Go Home!',
]

function golfScore(par, strokes) {
	// Only change code below this line
	if (strokes == 1) {
		return names[0]
	} else if (strokes <= par - 2) {
		return names[1]
	} else if (strokes == par - 1) {
		return names[2]
	} else if (strokes == par) {
		return names[3]
	} else if (strokes == par + 1) {
		return names[4]
	} else if (strokes == par + 2) {
		return names[5]
	} else if (strokes >= par + 3) {
		return names[6]
	}

	return 'Change Me'
	// Only change code above this line
}

golfScore(5, 4)
console.log(golfScore(1, 1))
console.log(golfScore(4, 2))
 */
/* function caseInSwitch(val) {
	let answer = ''
	// Only change code below this line
	switch (val) {
		case 1:
			answer = 'alpha'
			break
		case 2:
			answer = 'beta'
			break
		case 3:
			answer = 'gamma'
			break
		case 4:
			answer = 'delta'
		default:
			break
	}

	// Only change code above this line
	return answer
}

caseInSwitch(1)
 */

/* function switchOfStuff(val) {
	let answer = ''
	// Only change code below this line
	switch (val) {
		case 'a':
			answer = 'apple'
			break
		case 'b':
			answer = 'bird'
			break
		case 'c':
			answer = 'cat'
			break

		default:
			answer = 'stuff'
			break
	}

	// Only change code above this line
	return answer
}

switchOfStuff(1)
 */

/* function sequentialSizes(val) {
	let answer = ''
	// Only change code below this line
	switch (val) {
		case 1:
		case 2:
		case 3:
			answer = 'Low'
			break
		case 4:
		case 5:
		case 6:
			answer = 'Mid'
			break
		case 7:
		case 8:
		case 9:
			answer = 'High'
			break
	}
	// Only change code above this line
	return answer
}

sequentialSizes(1) */
/* function chainToSwitch(val) {
	let answer = ''
	// Only change code below this line
	switch (val) {
		case 'bob':
			answer = 'Marley'
			break
		case 42:
			answer = 'The Answer'
			break
		case 1:
			answer = 'There is no #1'
			break
		case 99:
			answer = 'Missed me by this much!'
			break
		case 7:
			answer = 'Ate Nine'
			break
	}

	// Only change code above this line
	return answer
}

chainToSwitch(7)
 */
/* function isLess(a, b) {
	// Only change code below this line
	a <= b
	// Only change code above this line
}

isLess(10, 15)
 */
// Setup
/* function abTest(a, b) {
	// Only change code below this line
	if (a < 0 || b < 0) {
		return
	}

	// Only change code above this line

	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
}

console.log(abTest(2, 2))
console.log(abTest(-2, 2))
 */

/* let count = 0

function cc(card) {
	// Only change code below this line
	if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
		count++
	} else if (card == 7 || card == 8 || card == 9) {
		count
	}
	if (card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
		count--
	}

	if (count <= 0) {
		return count + ' Hold'
	}
	return count + ' Bet'

	// Only change code above this line
}

cc(10)
cc('J')
cc('K')
cc('Q')

console.log(cc('A')) */

/* const myDog = {
	// Only change code below this line
	name: 'Boba',
	legs: 4,
	tails: 1,
	friends: [],

	// Only change code above this line
} */
// Setup
/* const testObj = {
	"an entree": "hamburger",
	"my side": "veggies",
	"the drink": "water"
 };
 
 // Only change code below this line
 const entreeValue = testObj['an entree'];   // Change this line
 const drinkValue = testObj['the drink'];    // Change this line */
/* 
const dogs = {
	Fido: 'Mutt',
	Hunter: 'Doberman',
	Snoopie: 'Beagle',
}

const myDog = 'Hunter'
const myBreed = dogs[myDog]
console.log(myBreed)
// Setup
const testObj = {
	12: "Namath",
	16: "Montana",
	19: "Unitas"
 };
 
 // Only change code below this line
 const playerNumber = 16;  // Change this line
 const player = testObj[playerNumber];   // Change this line
 */
// Setup
/* const myDog = {
	"name": "Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"]
 };
 
 // Only change code below this line
 myDog["name"]="Happy Coder" */

/* // Setup
function phoneticLookup(val) {
	let result = ''
	let lookup = {
		alpha: 'Adams',
		bravo: 'Boston',
		charlie: 'Chicago',
		delta: 'Denver',
		echo: 'Easy',
		foxtrot: 'Frank',
	}

	result = lookup[val]
	console.log(result)
	// Only change code above this line
	return result
}

phoneticLookup('charlie')
 */

/* function updateLight(current) {
	switch (current) {
		case 'green':
			return 'yellow'
		case 'yellow':
			return 'red'
		default:
			return 'green'
	}
}
console.log(updateLight('yellow'))
console.log(updateLight('red'))
console.log(updateLight('green'))
if (current === 'green') {
	return 'yellow'
} else if (current === 'yellow') {
	return 'red'
} else if (current === 'red') {
	return 'green'
}
 */
/* function checkObj(obj, checkProp) {
	// Only change code below this line
  if( obj.hasOwnProperty(checkProp)){return obj[checkProp]}
	return "Not Found";
	// Only change code above this line
 } */
/* const myStorage = {
	car: {
		inside: {
			'glove box': 'maps',
			'passenger seat': 'crumbs',
		},
		outside: {
			trunk: 'jack',
		},
	},
}

const gloveBoxContents = myStorage.car.inside['glove box']
 */
/* const myPlants = [
	{
		type: 'flowers',
		list: ['rose', 'tulip', 'dandelion'],
	},
	{
		type: 'trees',
		list: ['fir', 'pine', 'birch'],
	},
]

const secondTree = myPlants[1].list[1]
console.log(secondTree)
 */
// Setup
/* const recordCollection = {
	2548: {
		albumTitle: 'Slippery When Wet',
		artist: 'Bon Jovi',
		tracks: ['Let It Rock', 'You Give Love a Bad Name'],
	},
	2468: {
		albumTitle: '1999',
		artist: 'Prince',
		tracks: ['1999', 'Little Red Corvette'],
	},
	1245: {
		artist: 'Robert Palmer',
		tracks: [],
	},
	5439: {
		albumTitle: 'ABBA Gold',
	},
}

// Only change code below this line
function updateRecords(records, id, prop, value) {
	if (value === '') {
		delete records[id][prop]
	} else if (prop !== 'tracks') {
		records[id][prop] = value
	} else {
		if (!records[id].hasOwnProperty('tracks')) {
			records[id].tracks = []
		}
		records[id].tracks.push(value)
	}
	return records
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA')

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'))
 */

/* // Setup
const myArray = []
let i = 5

while (i >= 0) {
	myArray.push(i)
	i--
}
console.log(myArray)
// Only change code below this line
 */
/* // Setup
const myArray = []
for (let i = 1; i <= 5; i++) {
	myArray.push(i)
}
console.log(myArray)
// Only change code below this line
 */

/* // Setup
const myArray = []
for (let i = 1; i < 10; i += 2) {
	myArray.push(i)
}
console.log(myArray)
// Only change code below this line
 */
/* // Setup
const myArray = []
for (let i = 10; i > 0; i -= 2) {
	myArray.push(i)
}
console.log(myArray)
// Only change code below this line
 */

/* // Setup
const myArray = []

for (let i = 9; i > 0; i -= 2) {
	myArray.push(i)
}
console.log(myArray)
// Only change code below this line
 */
/* // Setup
let total = 0
const myArr = [2, 3, 4, 5, 6];
for (let i = 0; i< myArr.length; i ++) {
  total+=myArr[i]
}
// Only change code below this line
 */
/* function multiplyAll(arr) {
	let product = 1;
	// Only change code below this line
 for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
	
	product*=  arr[i][j]
	}
 }
	// Only change code above this line
	return product;
 }
 
 multiplyAll([[1, 2], [3, 4], [5, 6, 7]]); */
// Setup
/* // Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 11); */
/* function sum(arr, n) {
	// Only change code below this line
	if (n === 0) {
		return 0
	} else {
		return sum(arr, n - 1) + arr[n - 1]
	}
}
// Only change code above this line
 */

/*
//recursion
function countdown(n) {
	if (n < 1) {
		return []
	} else {
		const countArray = countdown(n - 1)

		countArray.unshift(n)
		return countArray
	}
}
console.log(countdown(9))
 */
/* function rangeOfNumbers(startNum, endNum) {
	if (startNum < 1) {
		return []
	} else {
		const countArray = rangeOfNumbers(startNum - 1)

		countArray.push(startNum)
		return countArray
	}
}
console.log(rangeOfNumbers(3, 9))
 */
/* 
//recursion a b 
function rangeOfNumbers(startNum, endNum) {
	if (endNum < startNum) {
		return []
	} else {
		const countArray = rangeOfNumbers(startNum, endNum - 1)
		countArray.push(endNum)
		return countArray
	}
}
console.log(rangeOfNumbers(6, 6))
 */
