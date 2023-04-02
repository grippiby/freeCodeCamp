/* function consecutive(arr) {
	//code me
	arr.sort((a, b) => a - b)
	let min = arr[0]
	let max = arr[arr.length - 1]
	let count = 0
	for (let i = min; i <= max; i++) {
		if (!arr.includes(i)) {
			count++
		}
	}
	return count
}
console.log(consecutive([4, 8, 6]))
 */
/* var humanYearsCatYearsDogYears = function (humanYears) {
	// Your code here!
	let cat = 0
	let dog = 0
	if (humanYears >= 3) {
		for (let i = humanYears; i >= 3; i--) {
			cat += 4
			dog += 5
		}
		cat = cat + 24
		dog = dog + 24
	} else if (humanYears == 1) {
		return [humanYears, 15, 15]
	} else if (humanYears == 2) {
		return [humanYears, 24, 24]
	}
	return [humanYears, cat, dog]
}
console.log(humanYearsCatYearsDogYears(10))
console.log(humanYearsCatYearsDogYears(1))
console.log(humanYearsCatYearsDogYears(2))
 */
