/* function fixTheMeerkat(arr) {
	//your code here
	return arr.reverse()
}
 */
/* function trim(str, size) {
	if (str.length <= 3 && size <= 3) {
		return str.slice(0, 1).concat('...')
	} else if (str.length >= size) {
		return str.slice(0, size - 3).concat('...')
	}

	return str
} */
/* const trim = (str, size) => {
	if (str.length <= size) return str
	if (size <= 3) return str.slice(0, size) + '...'
	if (size > 3) return str.slice(0, size - 3) + '...'
}

console.log(trim('Creating kata is fun', 14))
console.log(trim('He', 1)) */

/* function contamination(text, char) {
	// Code here ;)
	let string = ''
	for (let i = 0; i < text.length; i++) {
		string += char
	}
	return string
}
console.log(contamination('abc', 'z'))
 */
/* function initials(n) {
	const words = n.split(' ')
	let initials = ''
	words.forEach(function (word, index) {
		initials += word[0].toUpperCase() + '.'
		if (index === words.length - 1) {
			initials += word.slice(1).charAt(0).toUpperCase() + word.slice(2)
		}
	})

	return initials
} */
