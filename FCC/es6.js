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
