//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// repeatString("yo", 3, ", ") => "yo, yo, yo"
// repeatString("yo", 0, ", ") => ""
// repeatString("yo", 1, ", ") => "yo"

/* function repeatString(string, qty, spl) {
	let newStr = ''
	while (qty > 0) {
		newStr += string
		newStr += spl
		qty--
	}
	return newStr.slice(0, newStr.length - spl.length)
} */

//мое решение
/* function repeatString(string, qty, spl) {
	let newStr = ''
	for (let i = 0; i < qty; i++) {
		const element = string + spl
		newStr += element
	}
	return newStr.slice(0, newStr.length - spl.length)
}
 */

const repeatString = (string, qty, spl) => new Array(qty).fill(string).join(spl)
/* 

console.log(repeatString('yo', 0, ', '))
 */

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

/* function checkStart(str, value) {
	return str.toLowerCase().startsWith(value)
}
 */

const checkStart = (sent, word) =>
	sent.slice(0, word.length).toLowerCase() === word.toLowerCase()
/* 
console.log(checkStart('Incubator', 'inc')) */

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

function truncateString(string, substr) {
	let newStr = string.slice(0, substr)
	return newStr.concat('...')
}
/* console.log(truncateString('Всем студентам инкубатора желаю удачи!', 10)) */

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи.") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null
// getMinLengthWord(true) => null
// getMinLengthWord(undefined) => null
function getMinLengthWord(string) {
	if (typeof string !== 'string' || string === '') {
		return null
	}
	return string
		.trim()
		.split(' ')
		.sort((a, b) => a.length - b.length)[0]
}
/* 
console.log(getMinLengthWord('Всем студентам инкубатора желаю удачи. '))
console.log(getMinLengthWord(undefined)) */

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"

function setUpperCase(string) {
	let newStr = string
		.toLowerCase()
		.split(' ')
		.map((el) => {
			return el.slice(0, 1).toUpperCase().concat(el.slice(1))
		})
	return newStr.join(' ')
}

/* console.log(setUpperCase('всем стУдентам   инкуБатора Желаю удачИ!')) */
// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false

function isIncludes(string, substring) {
	let newArr = string.toLowerCase().split('')
	let newSubs = substring.toLowerCase().split('')
	for (let i = 0; i < newSubs.length; i++) {
		const element = newSubs[i]
		let myArr = newArr.indexOf(element)
		if (myArr === -1) {
			return false
		}
		let del = newArr.splice(myArr, 1)
	}
	return true
}

/* console.log(isIncludes('Incubatorrrr', 'CuT')) */

//второе решение 6ой задачи
const isIncludesStrict = (string, substring) => {
	string = string.toLowerCase()
	substring = substring.toLowerCase()
	for (const char of substring) {
		if (!string.includes(char)) {
			return false
		}
		string = string.replace(char, '')
	}
	return true
}

/////////////////////////////////////////
/// Task 6
/////////////////////////////////////////

/* let isIncludes = (strFull, subStr) => {
	// Защита от пользователя
	if (
		typeof strFull !== 'string' ||
		strFull === '' ||
		typeof subStr !== 'string' ||
		subStr === ''
	)
		return null

	// Простой вариант
	let strFullArr = strFull.toLowerCase().split('')
	let subStrArr = subStr.toLowerCase().split('')
	// Удаляем из подстроки все символы, которые есть в исходной. Если что-то останется - значит false
	return subStrArr.filter((e) => !strFullArr.includes(e)).length === 0
}

console.log('//// Task 6 easy //// ')
console.log(isIncludes('Incubator', 'Cut'))
console.log(isIncludes('Incubator', 'table'))
console.log(isIncludes('Incubator', 'inbba'))
console.log(isIncludes('Incubator', 'inba'))
console.log(isIncludes('Incubator', 'Incubatorrr')) */

/* let isIncludesHard = (strFull, subStr) => {
	// Защита от пользователя
	if (
		typeof strFull !== 'string' ||
		strFull === '' ||
		typeof subStr !== 'string' ||
		subStr === ''
	)
		return null

	let strFullArr = strFull.toLowerCase().split('')
	let subStrArr = subStr.toLowerCase().split('')

	for (let i = 0; i < subStrArr.length; i++) {
		let strFullArrayIndex = strFullArr.indexOf(subStrArr[i])
		// Если в исходной строке нет символа из подстроки - возвращаем false
		if (strFullArrayIndex === -1) return false
		// Удаляем из исходной строки символ. На случай, если в подстроке несколько одинаковых символом, а в исходной только 1 :)
		strFullArr.splice(strFullArrayIndex, 1)
	}

	return true
}

console.log('//// Task 6 hard //// ')
console.log(isIncludesHard('Incubator', 'Cut'))
console.log(isIncludesHard('Incubator', 'table'))
console.log(isIncludesHard('Incubator', 'inbba'))
console.log(isIncludesHard('Incubator', 'inba'))
console.log(isIncludesHard('Incubator', 'Incubatorrr'))
 */
