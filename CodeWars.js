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

/* function howMuchWater(water, load, clothes) {
	if (clothes < load) {
		return 'Not enough clothes'
	} else if (clothes > load * 2) {
		return 'Too much clothes'
	} else {
		let amountOfWater = water * Math.pow(1.1, clothes - load)
		return Math.round(amountOfWater * 100) / 100
	}
	// Insert your brilliant code here
}
console.log(howMuchWater(10, 10, 21))
console.log(howMuchWater(10, 10, 2))
console.log(howMuchWater(10, 11, 20))
console.log(howMuchWater(50, 15, 29))
 */

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
console.log(consecutive([4, 8, 6])) */

/* function divisibleBy(numbers, divisor) {
	numbers.sort((a, b) => a - b)
	let newArr = []

	//numbers.forEach((element) => {
	//	if (+element % divisor == 0) {
	//		newArr.push(element)
	//	}
	//	})

	for (let i = 0; i <= numbers.length; i++) {
		if (+numbers[i] % divisor == 0) {
			newArr.push(numbers[i])
		}
	}
	return newArr
	console.log(numbers)
}

console.log(divisibleBy([1, 4, 3, 4, +0, 6], 2))
 */

/* function arrAdder(arr) {
	let result = ''

	for (let i = 0; i < arr[0].length; i++) {
		for (let j = 0; j < arr.length; j++) {
			result += arr[j][i]
		}
		result +=' '
	}

	return result.trim()
}

arrAdder([
	['J', 'L', 'L', 'M'],
	['u', 'i', 'i', 'a'],
	['s', 'v', 'f', 'n'],
	['t', 'e', 'e', ''],
])

console.log(
	arrAdder([
		['T', 'M', 'i', 't', 'p', 'o', 't', 'c'],
		['h', 'i', 's', 'h', 'o', 'f', 'h', 'e'],
		['e', 't', , 'e', 'w', , 'e', 'l'],
		['', 'o', '', '', 'e', '', '', 'l'],
		['', 'c', '', '', 'r', '', '', ''],
		['', 'h', '', '', 'h', '', '', ''],
		['', 'o', '', '', 'o', '', '', ''],
		['', 'n', '', '', 'u', '', '', ''],
		['', 'd', '', '', 's', '', '', ''],
		['', 'r', '', '', 'e', '', '', ''],
		['', 'i', '', '', '', '', '', ''],
		['', 'a', '', '', '', '', '', ''],
	])
)
 */

/* function betweenExtremes(numbers) {
	let min = numbers.sort((a, b) => a - b)[0]
	let max = numbers.sort((a, b) => a - b)[numbers.length - 1]
	
	return max - min
}
console.log(betweenExtremes([21, 34, 54, 43, 26, 12]))
 */
/* function sumEvenNumbers(input) {
	let sum = 0
	input.forEach((element) => {
		if (Math.round(element) % 2 === 0) {
			sum += element
		}
	})
	// [...]
	return sum
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
 */
/* function validParentheses(parenStr) {
	let myArr = []
	if (parenStr.length % 2 == 0) {
		for (let i = 0; i < parenStr.length; i++) {
			el = parenStr[i]
			if (el === '(') {
				myArr.push(el)
			} else if (el === ')') {
				if (myArr.length === 0) {
					return false
				} else {
					myArr.pop()
				}
			}
		}
	}
	return false
}
 */
/* function validParentheses(str) {
	const stack = []
	for (let i = 0; i < str.length; i++) {
		const char = str[i]
		if (char === '(') {
			stack.push(char)
		} else if (char === ')') {
			if (stack.length === 0) {
				return false // There is no matching opening parenthesis
			} else {
				stack.pop()
			}
		} else {
			return false // The string contains invalid characters
		}
	}
	return stack.length === 0 // True if all opening parentheses are matched and popped
}
 */
/* function largest(n, array) {
	// Find the n highest elements in a list
	let newArr = []
	array.sort((a, b) => b - a)
	for (let i = 0; i < n; i++) {
		const element = array[i]
		newArr.push(element)
	}

	return newArr.reverse()
}
console.log(largest(2, [7, 6, 5, 4, 3, 2, 1]))
console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
 */
/* function largest(n, array) {
	// Find the n highest elements in a list
	let newArr = array.sort((a, b) => a - b)
	n > 0 ? (newArr = newArr.slice(-n)) : (newArr = [])
	return newArr
}
console.log(largest(2, [7, 6, 5, 4, 3, 2, 1]))
console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
 */
/* function initials(name) {
	const words = name.split(' ')
	const firstInitials = words



		.slice(0, -1)
		.map((word) => word[0].toUpperCase() + '.')
	const lastWord = words[words.length - 1].replace(/^\w/, (c) =>
		c.toUpperCase()
	)
	return [...firstInitials, lastWord].join('')
}
console.log(initials('code wars')) //C.Wars
console.log(initials('Barack Hussain obama')) //B.H.Obama
 */
/* function initials(name) {
	const words = name.split(' ')
	const firstInitials = words
		.slice(0, -1)
		.map((word) => word[0].toUpperCase() + '.')

	const lastWord =
		words[words.length - 1].substr(0, 1).toUpperCase() +
		words[words.length - 1].substr(1)
	return [...firstInitials, lastWord].join('')
}
console.log(initials('code wars')) //C.Wars
console.log(initials('Barack Hussain obama')) //B.H.Obama
 */
/* function disemvowel(str) {
	return str.replace(/[aeiou]/gi, '')
}
console.log(disemvowel('This website is for losers LOL!')) //"Ths wbst s fr lsrs LL!"
 */

// your code here

/* BigO - alghorythm
function keepOrder(ary, val) {
	let start = 0
	let end = ary.length - 1

	while (start <= end) {
		const mid = Math.floor((start + end) / 2)

		if (ary[mid] < val) {
			start = mid + 1
		} else if (ary[mid] > val) {
			end = mid - 1
		} else {
			return mid
		}
	}

	return start
}
console.log(keepOrder([1, 1, 2, 2, 2], 2)) //2
console.log(keepOrder([1, 2, 3, 4, 7], 5)) //4
 */

/* function keepOrder(ary, val) {
	const index = ary.findIndex((el, i) => el >= val)
	return index === -1 ? ary.length : index
}
 */
/* function keepOrder(ary, val) {
	return ary.filter((value) => value < val).length
}
console.log(keepOrder([1, 1, 2, 2, 2], 2)) //2
console.log(keepOrder([1, 2, 3, 4, 7], 5)) //4
 */
/* function keepOrder(ary, val) {
	ary.push(val)
	ary.sort((a, b) => a - b)
	return ary.indexOf(val)
}
console.log(keepOrder([2, 5, 7, 9, 10, 20], 6))
 */
/* false || (NaN && true) || 0
 */

/* function isItANum(str) {
	str = str.replace(/\D/g, '')
	if (str.length === 11) {
		return str
	} else {
		return 'Not a phone number'
	}
}
console.log(isItANum('v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165'))
 */
/* function solution(start, finish) {
	let count = 0


			let sum = finish - startif (start % 2 === 0 && finish % 2 === 0) {
		return (count = (finish - start) / 3)
	}
	if (sum % 2 == 0) {
		return sum / 2
	}

	while (newStart <= finish) {
		newStart += 3
		count += 1
		if (newStart > finish) {
			return count
		}
	}
}
console.log(solution(1, 5))
console.log(solution(1, 9))
console.log(solution(2, 8))
 */
/* function insertDash(num) {
	let newArr = []
	for (let i = 0; i < num.toString().length; i++) {
		let prev = num.toString()[i]
		const thisElement = num.toString()[i + 1]
		newArr.push(prev)
		if (prev % 2 === 1 && thisElement % 2 === 1) {
			newArr.push('-')
		}
	}

	return newArr.join('')
}

console.log(insertDash(1003567)) // 1003-567')
 */
/* 
function allNonConsecutive(arr) {
	let newArr = []
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i]

		if (arr[i + 1] - element > 1) {
			let obj = { i: i + 1, n: arr[i + 1] }
			console.log(obj)
			newArr.push(obj)
		}
	}
	return newArr
}
console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]))
 */
/* function bmi(weight, height) {
	let bmi = weight / Math.pow(height, 2)

	if (bmi.toFixed(1) <= 18.5) {
		return 'Underweight'
	}
	if (bmi.toFixed(1) <= 25.0) {
		return 'Normal'
	}
	if (bmi.toFixed(1) <= 30.0) {
		return 'Overweight'
	}
	if (bmi.toFixed(1) > 30) {
		return 'Obese'
	}
}
console.log(bmi(80, 1.8)) // "Normal")
 */

/* function sortMyString(S) {
	let str = S
	let odd = ''
	let even = ''
	for (let i = 0; i < str.length; i += 2) {
		odd += str[i]
	}
	for (let i = 1; i < str.length; i += 2) {
		even += str[i]
	}

	return `${odd} ${even}`
}
console.log(sortMyString('CodeWars')) // 'CdWr oeas'
console.log(sortMyString("YCOLUE'VREER")) //, "YOU'RE CLEVER"
 */
