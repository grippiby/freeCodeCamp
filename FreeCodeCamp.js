/* function checkScope() {
	let i = 'function scope'
	if (true) {
		let i = 'block scope'
		console.log('Block scope i is: ', i)
	}
	console.log('Function scope i is: ', i)
	return i
}
checkScope()
 */
/* const s = [5, 7, 2]
function editInPlace() {
	// Only change code below this line
	// Using s = [2, 5, 7] would be invalid
	// Only change code above this line
	s.sort()
	return console.log(s)
}
editInPlace()
 */
/* function freezeObj() {
	const MATH_CONSTANTS = {
		PI: 3.14,
	}
	// Only change code below this line
	Object.freeze(MATH_CONSTANTS)
	// Only change code above this line
	try {
		MATH_CONSTANTS.PI = 99
	} catch (ex) {
		console.log(ex)
	}
	return MATH_CONSTANTS.PI
}
const PI = freezeObj() */

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea'
/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
	const teaCups = []

	for (let cups = 1; cups <= numOfCups; cups += 1) {
		const teaCup = prepareTea()
		teaCups.push(teaCup)
	}
	return teaCups
}

// Only change code below this line

const tea4TeamFCC = null
getTea(40)
// Only change code above this line
