/* let dog = {
	name: 'Aflac',
	numLegs: 2,
}
let dog = {
	name: 'Spot',
	numLegs: 4,
}
// Only change code below this line
console.log(dog.name)
console.log(dog.numLegs) */

/* let dog = {
	name: 'Spot',
	numLegs: 4,
	sayLegs() {
		return 'This dog has ' + dog.numLegs + ' legs'
	},
}

console.log(dog.sayLegs())
 */
/* let dog = {
	name: 'Spot',
	numLegs: 4,
	sayLegs() {
		return `This dog has ${dog.numLegs} legs`
	},
}

console.log(dog.sayLegs())
 */
/* let dog = {
	name: 'Spot',
	numLegs: 4,
	sayLegs: function () {
		return 'This dog has ' + this.numLegs + ' legs.'
	},
}

dog.sayLegs()
 */
/* function Dog() {
	this.name = 'spot'
	this.color = 'black'
	this.numLegs = 4
}
 */
/* function Dog() {
	this.name = 'Rupert'
	this.color = 'brown'
	this.numLegs = 4
}

let hound = new Dog() */
/*  */
/* function Dog(name, color, numLegs = 4) { */
/* 	this.name = name; */
/* 	this.color =  color; */
/* 	this.numLegs =4; */
/* 	} */
/* 	 */
/* 	const terrier = new Dog('terry', 'black') */

/* function House(numBedrooms) {
	this.numBedrooms = numBedrooms
}

const myHouse = new House(4)
myHouse instanceof House
// Only change code below this line
 */
/* function Bird(name) {
	this.name = name
	this.numLegs = 2
}

let canary = new Bird('Tweety')
let ownProps = []

// Only change code below this line
for (const key in canary) {
	if (canary.hasOwnProperty.call(canary, key)) {
		const element = canary[key]
		ownProps.push(key)
		console.log(element)
	}
}
console.log(ow)
 */
/* function Dog(name) {
	this.name = name;
 }
 Dog.prototype.numLegs = 4
 
 // Only change code above this line
 let beagle = new Dog("Snoopy");
 console.log(beagle) */
/* function Dog(name) {
	this.name = name
}

Dog.prototype.numLegs = 4

let beagle = new Dog('Snoopy')

let ownProps = []
let prototypeProps = []

for (const key in beagle) {
	if (Object.hasOwnProperty.call(beagle, key)) {
		const element = beagle[key]
		ownProps.push(key)
	} else {
		prototypeProps.push(key)
	}
}
// Only change code below this line
console.log(ownProps)
console.log(prototypeProps)
beagle.name = 'duty'
console.log(beagle) */
/* 
function splitify(str) {
	// Only change code below this line

	let arr = str.split('-').map((element) => element.split(' '))

	return (arr = arr.join().split('.').join().split(','))

	// Only change code above this line
}

console.log(splitify('Hello World,I-am code'))
console.log(splitify('This.is.a-sentence'))
 */
/* function sentensify(str) {
	// Only change code below this line
	return str.split('-').join(' ').split('.').join(' ').split(',').join(' ')

	// Only change code above this line
}

sentensify('May-the-force-be-with-you')
 */
