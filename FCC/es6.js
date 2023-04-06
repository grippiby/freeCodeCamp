/* const sum = (...args) => {
	let total = 0
	for (let i = 0; i < args.length; i++) {
		total += args[i]
	}
	return total
}

let b = sum(0, 1, 2, 3, 4)
console.log(b)
 */
/* const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2); */

/* const HIGH_TEMPERATURES = {
	yesterday: 75,
	today: 77,
	tomorrow: 80
 };
 
 // Only change code below this line
 const {today} = HIGH_TEMPERATURES;
 const {tomorrow} = HIGH_TEMPERATURES;
 
 // Only change code above this line */

/* const HIGH_TEMPERATURES = {
	yesterday: 75,
	today: 77,
	tomorrow: 80,
}

// Only change code below this line

const { today: highToday } = HIGH_TEMPERATURES
const { tomorrow: highTomorrow } = HIGH_TEMPERATURES

// Only change code above this line */

/* const LOCAL_FORECAST = {
	yesterday: { low: 61, high: 75 },
	today: { low: 64, high: 77 },
	tomorrow: { low: 68, high: 80 }
 };
 
 // Only change code below this line
	
 const {today: {low: lowToday}} = LOCAL_FORECAST;
 const {today: {high: highToday}} = LOCAL_FORECAST;
 
 // Only change code above this line */
/* 
let a = 8,
	b = 6
// Only change code below this line
let d = ([a, b] = [b, a])
console.log(d)
 */

/* function removeFirstTwo(list) {
	// Only change code below this line
	const [, , ...shorterList] = list // Change this line
	// Only change code above this line
	return shorterList
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sourceWithoutFirstTwo = removeFirstTwo(source)
 */
/* import subtract from './math_functions.js'
// Only change code above this line

subtract(7, 4)
 */
/* const makeServerRequest = new Promise((resolve, reject) => {
	// responseFromServer represents a response from a server
	let responseFromServer;
	  
	if(responseFromServer) {
	  resolve ("We got the data")
	  // Change this line
	} else {  
	 reject ("Data not received")
	  // Change this line
	}
 }); */
/* const makeServerRequest = new Promise((resolve, reject) => {
	// responseFromServer is set to true to represent a successful response from a server
	let responseFromServer = true

	if (responseFromServer) {
		resolve('We got the data')
	} else {
		reject('Data not received')
	}
})

makeServerRequest.then((result) => console.log(result))
 */
/* const makeServerRequest = new Promise((resolve, reject) => {
	// responseFromServer is set to false to represent an unsuccessful response from a server
	let responseFromServer = false

	if (responseFromServer) {
		resolve('We got the data')
	} else {
		reject('Data not received')
	}
})

makeServerRequest
	.then((result) => {
		console.log(result)
	})
	.catch((error) => console.log(error))
 */

/* 	let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line */
/* 
const result = {
	success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
	failure: ['no-var', 'var-on-top', 'linebreak'],
	skipped: ['no-extra-semi', 'no-dup-keys'],
}
function makeList(arr) {
	// Only change code below this line
	const failureItems = []

	arr.forEach((element) => {
		console.log(element)
		failureItems.push(`<li class="text-warning">${element}</li>`)
	})
	console.log(failureItems)
	return failureItems
}

const failuresList = makeList(result.failure)
 */
// Only change code below this line
/* class Vegetable  {
	constructor(name) {
	  this.name = name;
	}
 }
 
 // Only change code above this line
 
 const carrot = new Vegetable('carrot');
 console.log(carrot.name); // Should display 'carrot' */

/* 
// Only change code below this line
class Thermostat {
	constructor(degr) {
		this._degr = degr
	}

	get temperature() {
		return (5 / 9) * (this._degr - 32)
	}

	set temperature(value) {
		this._degr = (value * 9.0) / 5 + 32
	}
}
// Only change code above this line

const thermos = new Thermostat(76) // Setting in Fahrenheit scale
let temp = thermos.temperature // 24.44 in Celsius
thermos.temperature = 26
temp = thermos.temperature // 26 in Celsius */
/* function checkScope() {
	let i = 'function scope'
	if (true) {
		let i = 'block scope'
		console.log('Block scope i is: ', i)
	}
	console.log('Function scope i is: ', i)
	return i
}
checkScope() */
