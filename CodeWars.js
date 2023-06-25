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
/* function charToAscii(string) {
	//your code here
	let myArr = []

	if (string === '') {
		return null
	} else {
		for (let i = 0; i < string.length; i++) {
			const element = string[i]
			const toAscii = string[i].charCodeAt(0)
			const myElem = `${element}:${toAscii}`
			if (!myArr.includes(myElem)) {
				myArr.push(myElem)
			}
		}
	}
	return myArr
}
console.log(charToAscii('aaaaAA')) //, null,"deals with an empty str")
 */
/* function charToAscii(string) {
	//your code here
	let myStr = {}

	if (string.length === 0) {
		return null
	} else {
		for (let i = 0; i < string.length; i++) {
			const element = string[i]

			if (!element.match(/[a-zA-Z]/) || myStr[element]) {
				continue
			}
			myStr[element] = element.charCodeAt(0)
		}
	}
	return myStr
}
console.log(charToAscii('hello world')) //, null,"deals with an empty str")
 */

/* function titleToNumber(title) {
	let sum = 0

	for (k = 0, i = 0; i < title.length; i++) {
		k = 26 * k + title.charCodeAt(i) - 64 // 26 * k - шаг на след ячейку; title.charCodeAt(i) - 64 - число текущей ячейки; К - аккумулятор, изначально 0, тк. при умножении на 0 мы получим 0 и прибавим текущее значение
		console.log(k)
		 = k
	}
	return sum
}

console.log(titleToNumber('BA')) //,53);
 */
/* function removeSmallest(numbers) {
	let newArr = [...numbers]
	let min = newArr[0]
	let indOfMin = 0
	//find min number
	for (let i = 0; i < newArr.length; i++) {
		const element = newArr[i]
		if (min > element) {
			min = element
			indOfMin = i
		}
	}
	newArr.splice(indOfMin, 1)
	console.log(`my min is ${min}`)
	console.log(`index f Min ${indOfMin}`)
	return newArr
}
console.log(removeSmallest([2, 2, 1, 2, 1])) //, [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]")
 */

/* function divCon(x) {
	let numb = 0
	let str = 0
	x.map((el) => {
		typeof el === 'number' ? (numb += el) : (str = str + Number(el))
	})
	return numb - str
	console.log(str)
}
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])) //, 13))
// reduce analog
let numb = 0
	let str = 0
	x.map((el) => {
		typeof el === 'number' ? (numb += el) : (str = str + Number(el))
	})
	return numb - str
 */
/* 
function dotCalculator(equation) {
	let fst = 0
	let scnd = 0
	let symb = undefined
	let sum = undefined
	let answer = ''
	for (let i = 0; i < equation.length; i++) {
		const element = equation[i]

		if (element === '.') {
			fst += 1
		}
		if (element === ' ') {
			symb = (equation[i + 1] + equation[i + 2]).trim()
			break
		}
	}

	console.log(`myfst ${fst}`)
	for (let i = equation.length; i > 0; i--) {
		const element = equation[i]
		if (element === '.') {
			scnd += 1
		}
		if (element === ' ') {
			break
		}
	}
	console.log(`myScnd ${scnd}`)

	switch (symb) {
		case '-':
			sum = fst - scnd
			break
		case '+':
			sum = fst + scnd
			break
		case '*':
			sum = fst * scnd
			break
		case '//':
			sum = Math.floor(fst / scnd)
			console.log(sum)

			break
	}

	for (let i = 0; i < sum; i++) {
		answer += '.'
	}

	return answer
}

console.log(dotCalculator('..... // .')) //'..'))
console.log(dotCalculator('..... * ...')) //'..'))
 */
/* function sortByLength(array) {
	let newArr = [...array]
	return newArr.sort((a, b) => a.length - b.length)

}
console.log(sortByLength(['Beg', 'Life', 'I', 'To'])) //["I", "To", "Beg", "Life"] */

/* function noOdds(values) {
	let odd = []

	values.map((el) => {
		if (el % 2 === 0) {
			odd.push(el)
		}
	})
	
	return odd
	// Return all non-odd values
}
console.log(noOdds([0, 1, 2, 3])) //, [0,2] )
console.log(noOdds([0, 1])) //, [0]
 */

/* function add() {
	let sum = 0
	for (let i = 0; i < arguments.length; i++) {
		element = arguments[i]
		let newVal = element / (i + 1)
		sum += newVal
	}
	return Math.round(sum)
}
console.log(add(2)) //2)
console.log(add(4, -3, -2)) // 2)
console.log(add(-1, -2, -3, -4)) //, -4);)
 */
/* 
var mispelled = function (word1, word2) {
	if (word1.length === word2.length) {
		let count = word1.length
		for (let i = 0; i < word1.length; i++) {
			const element = word1[i]
			const element2 = word2[i]
			if (element === element2) {
				count--
			}
		}
		return count > 1 ? false : true
	}

	if (word1.length - 1 === word2.length) {
		return word1.includes(word2)
	}
	if (word1.length + 1 === word2.length) {
		return word2.includes(word1)
	}
	if (word1.length > word2.length || word1.length < word2.length) {
		return false
	}
}
console.log(mispelled('versed', 'xersed')) // returns true
mispelled('versed', 'applb') // returns false
console.log(mispelled('versed', 'v5rsed')) // returns true
console.log(mispelled('1versed', 'versed')) // returns true
mispelled('versed', 'versed') // returns true
console.log(mispelled('versed', 'aaversed'))
 */
/* function alphabetWar(fight) {
	let left = 0
	let right = 0
	for (let i = 0; i < fight.length; i++) {
		const element = fight[i]
		switch (element) {
			case 'w':
				left += 4
				break
			case 'p':
				left += 3
				break
			case 'b':
				left += 2
				break
			case 's':
				left += 1
				break
			case 'm':
				right += 4
				break
			case 'q':
				right += 3
				break
			case 'd':
				right += 2
				break
			case 'z':
				right += 1
		}
	}
	console.log(left)
	console.log(right)
	return left === right
		? "Let's fight again!"
		: left > right
		? 'Left side wins!'
		: 'Right side wins!'
}

console.log(alphabetWar('wwwwww')) //, "Right side wins!" );)
 */
/* function bandNameGenerator(str) {
	if (str[0] === str.charAt(str.length - 1)) {
		let mystr = str.charAt(str[0]).toLocaleUpperCase() + str.substring(1)

		return mystr + str.substring(1)
	} else {
		let mystr = str.charAt(str[0]).toLocaleUpperCase() + str.substring(1)
		return 'The ' + mystr
	}

	return str
	// Happy coding
}
console.log(bandNameGenerator('sandles')) //, 'Sandlesandles'))
console.log(bandNameGenerator('knife')) //, 'The Knife') */
/* function heron(a, b, c) {
	let answ = 0
	let s = (a + b + c) / 2

	answ = Math.sqrt(s * (s - a) * (s - b) * (s - c))

	return answ
}
console.log(heron(3, 4, 5))
 */
/* var kookaCounter = function (laughing) {
	let count = 1
	let letter = laughing[0]
	
	if (laughing.length < 1) {
		return 0
	}
	for (let i = 2; i < laughing.length; i += 2) {
		const element = laughing[i]
		if (element === letter) {
			count += 0
			letter = element
			console.log(letter)
		}
		if (element !== letter) {
			count += 1
			letter = element
		}
	}
	return count
}
console.log(kookaCounter('HaHaHahahaHaHa')) //3
 */

/* function computerToPhone(numbers) {
	// ...
	let str = numbers
	let newStr = ''
	for (let i = 0; i < str.length; i++) {
		const element = str[i]

		switch (element) {
			case '1':
				newStr += '7'
				break
			case '2':
				newStr += '8'
				break
			case '3':
				newStr += '9'
				break
			case '7':
				newStr += '1'
				break
			case '8':
				newStr += '2'
				break
			case '9':
				newStr += '3'
				break
			default:
				newStr += element
				break
		}
	}
	return newStr
}
console.log(computerToPhone('0789456123')) //, "0123456789"))
 */

/* function swap(string) {
	const re = /^[aeiou]$/i
	let nstr = ''
	for (let i = 0; i < string.length; i++) {
		const element = string[i]
		if (element.match(re)) {
			nstr += element.toUpperCase()
		} else {
			nstr += element
		}
	}
	return nstr
}
console.log(swap('Codewars')) //, "COdEwArs";)

function swap(st){
	return st.replace(/[aeiou]/g, v => v.toUpperCase() )
 }//z. */

/* let b = [1, [1, 2], [3, 4], [2, 4]]
function revAr(params) {
	return params
		.join(',')
		.split(',')
		.map((el) => +el)
}
console.log(revAr(b))
 */

/* function getMiddle(s) {
	let str = s
	if (str.length % 2 === 0) {
		let symb = str.length / 2
		return str[symb - 1] + str[symb]
	}

	return str[Math.ceil(str.length / 2 - 1)]
}
console.log(getMiddle('test')) //es
console.log(getMiddle('testing')) //t
console.log(getMiddle('A')) //A
 */

/* function removeEveryOther(arr) {
	return arr.filter((el, ind) => {
		if (ind % 2 === 0) {
			return el
		}
	})

	//your code here
}
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])) // ['Hello',
 */

/* let b = [1, [1, 2], [3, 4], [2, 4]]

const head = (arr) => arr[0]
const last = (arr) => arr[arr.length - 1]


var tail = (arr) => arr.slice(1)
const init = (arr) => arr.slice(0, -1)
console.log(head(b))
console.log(last([7, 2]))
console.log(tail([33, 42]))
console.log(init(b))
console.log(init([1, 5, 7, 9]))
console.log(init([1, 5, 7, 9]))
 */

/* function highAndLow(numbers) {
	let newArr = numbers.split(' ').sort((a, b) => a - b)
	// let str = newArr[0]
	//let str = newArr[newArr.length - 1]
	// let str = `${newArr[newArr.length - 1]} ${newArr[0]}`
	return `${newArr[newArr.length - 1]} ${newArr[0]}`
	console.log(newArr)

	// ...
}

console.log(highAndLow('1 2 3 4 5')) // return "5 1"
console.log(highAndLow('1 2 -3 4 5'))
 */

/* function descendingOrder(n) {
	let str = n
		.toString()
		.split('')
		.sort((a, b) => b - a)
		.join('')
		.toString()
	return +str
}
console.log(descendingOrder(123456789)) //, 987654321);
 */
/* 
function accum(s) {
	let oneLetter = s
	let newArr = []
	for (let i = 0; i < oneLetter.length; i++) {
		const element = oneLetter[i]
		newArr.push(element.repeat(i + 1))
	}
	let newB = newArr.map((el, index) => {
		let bigLett = el[0].toUpperCase()
		let newStr = ''
		return (newStr = bigLett + el[0].toLowerCase().repeat(index))
	})

	return newB.join('-')
}
console.log(accum('ZpglnRxqenU')) //, "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"));
 */
/* function isIsogram(str) {
	//...
	let bool = 0

	let b = str.toLowerCase().split('').sort()

	for (let i = 0; i < b.length; i++) {
		const element = b[i]
		element === b[i + 1] ? (bool += 1) : (bool += 0)
	}

	return bool === 0 ? true : false
}
console.log(isIsogram('isIsogram')) // true ););
 */

/* var isSquare = function (n) {
	if (n >= 0) {
		sq = Math.sqrt(n)
		return sq.toString().includes('.') ? false : true
	} else return false

	console.log(Math.sqrt(n))
}
console.log(isSquare(-4)) */

//целое ли число из корня квадратного
/* function isSquare(n) {
	return Math.sqrt(n) % 1 === 0
}
 */

/* function XO(str) {
	let newStr = str.toLowerCase()
	let x = 0
	let o = 0
	for (let i = 0; i < newStr.length; i++) {
		const element = newStr[i]
		element === 'x' ? (x += 1) : (x += 0)
		element === 'o' ? (o += 1) : (o += 0)
	}
	return x === o
}
console.log(XO('xOxom')) //false
 */

/* function DNAStrand(dna) {
	let newStr = ''
	for (let i = 0; i < dna.length; i++) {
		const element = dna[i]
		element === 'A'
			? (newStr += 'T')
			: element === 'T'
			? (newStr += 'A')
			: element === 'G'
			? (newStr += 'C')
			: element === 'C'
			? (newStr += 'G')
			: (newStr += element)
	}
	return newStr
	//your code here
}
console.log(DNAStrand('GTAT')) //,"CATA");
 */

/* function longest(s1, s2) {
	// your code

	let newArr = [...s1.split(''), ...s2.split('')].sort()
	let newStr = ''
	// for (let i = 0; i < newArr.length; i++) {
	// 	const element = newArr[i]
	// 	if (element !== newArr[i + 1]) {
	// 		newStr += element
	// 	}
	// }
	newArr.map((el, ind, array) => {
		if (el !== array[ind + 1]) {
			newStr += el
		}
	})
	return newStr
}
console.log(longest('aretheyhere', 'yestheyarehere')) //, "aehrsty"));
 */

/* let user = {
	name: 'Svyat',
	hair: 33,
	address: {
		city: 'Bobruisk',
		house: 12,
	},
	laptop: { title: 'Zenbook' },
	books: ['Hunter', 'STALKER'],
}
const newBook = replaceBook(user, 'STALKER', 'Only IT-BOOKS!')

function replaceBook(u, oldBook, newBook) {
	let myNewCopy = {
		...u,
		books: [
			...u.books.map((el) =>
				el === oldBook ? el.replace(oldBook, newBook) : el
			),
		],
	}

	console.log(myNewCopy)

	return myNewCopy
}
 */

//Capitalize 1st LEtter (can slice(1) without word.length)
/* function capitalizeWord(word) {
	return word[0].toUpperCase() + word.slice(1, word.length)
}
console.log(capitalizeWord('glasswear')) //, 'Glasswear'));
 */

//Delete Vowels (aeiou)
//Vowel remover
/* function shortcut(string) {
	let newStr = ''
	for (let i = 0; i < string.length; i++) {
		const element = string[i]

		switch (element) {
			case 'a':
				break
			case 'e':
				break
			case 'i':
				break
			case 'o':
				break
			case 'u':
				break
			default:
				newStr += element
		}

	
	}

	return newStr
}
console.log(shortcut('how are you today?')) //, 'hw r y tdy?'););


 */

/* function problem(x) {
	if (typeof x === 'string') {
		return 'Error'
	}
	return x * 50 + 6
	//your code here
}

console.log(problem(0.03))
 */
//Find the position in alphabet!
/* function position(letter) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
	letter = letter.toLowerCase()
	return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`
}
console.log(position('e'))
 */

/* const isEvenIndexSumGreater = (arr) => {
	//...здесь пишем код.
	let sumOdd = 0
	let sumEven = 0

	arr.map((el, ind) => {
		if (ind % 2 === 0) {
			sumOdd += el
		}
		if (ind % 2 !== 0) {
			sumEven += el
		}
	})

	return sumOdd >= sumEven
}

console.log(isEvenIndexSumGreater([100, 1, 200, 2, 300, 4]))
 */

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.
/* 
function getSquarePositiveIntegers(array) {
	//...здесь пишем код.
	// В return стоит "заглушка", чтоб typescript не ругался
	return [...array]
		.filter((el) => el >= 0 && Number.isInteger(el))
		.map((el) => Math.pow(el, 2))
}

console.log(getSquarePositiveIntegers([4, 5.6, -9.8, 3.14, 10, 6, 8.34, -2])) */

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

/* function sumFirstNumbers(N) {
	return Array.from({ length: N + 1 }, (_, index) => index).reduce(
		(total, num) => total + num,
		0
	)
	//...здесь пишем код.
	// В return стоит "заглушка", чтоб typescript не ругался

}
console.log(sumFirstNumbers(4)) */

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

/* function getTriangleType(a, b, c) {
	if (a === b && b === c) {
		return '10'
	} else if (a + b <= c || a + c <= b || b + c <= a) {
		return '00'
	} else if (a === b || a === c || b === c) {
		return '01'
	} else {
		return '11'
	}
	//...здесь пишем код.
	// В return стоит "заглушка", чтоб typescript не ругался
}
console.log(getTriangleType(1, 1, 1))
 */

/* //мое решение (правильное ли?)
function Node(data) {
	this.data = data
	this.next = null
}

function getNth(node, index) {
	let newArr = node.split(' -> ').map((el) => (el !== 'null' ? +el : null))

	if (newArr.length < index) {
		return 'Invalid index value should throw error.'
	} else {
		return newArr.length > 1
			? newArr[index]
			: newArr[0] === 'null'
			? 'Null linked list should throw error.'
			: newArr[0]
	}

	console.log(newArr)
	console.log(newArr2)
}

console.log(getNth(`1 -> 2 -> 3 -> null`, 2))
 */

//Связный список с использованием рекурсии
/* function Node(data) {
	this.data = data;
	this.next = null;
 }
 
 function getNth(node, index) {
	if (!node) throw new Error('Invalid node at ' + index);
	
	return (index === 0) ? node : getNth(node.next, index - 1);
 } */

//Summing a number's digits
/* function sumDigits(number) {
	let newVal = 0
	for (let i = 0; i < number.toString().length; i++) {
		const element = +number.toString()[i]
		
		element >= 0 ? (newVal = newVal + element) : (newVal += 0)
	}
	return newVal
}
console.log(sumDigits(-32))
 */

/* //Alternating Among Three Values
//мое решение
function f(x, cc) {
	let newArr = []

	for (const x in cc) {
		if (Object.hasOwnProperty.call(cc, x)) {
			const element = cc[x]
			newArr.push(element)
		}
	}

	return newArr.indexOf(x) < 1
		? (myVal = newArr[1])
		: newArr.indexOf(x) > 1
		? (myVal = newArr[0])
		: (myVal = newArr[2])
}

console.log(f(4, { a: 3, b: 4, c: 5 }))

//интересное решение
function f(x, cc) {
	switch (x) {
		case cc.a:
			return cc.b
		case cc.b:
			return cc.c
		case cc.c:
			return cc.a
	}
}
 */
