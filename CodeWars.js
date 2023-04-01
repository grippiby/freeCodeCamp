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
