
function get(s) {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	let count = 0;
	for (let i = 0, j = s.length - 1; i < j; i++, j--) {
		if (vowels.includes(s[i])) count++;
		if (vowels.includes(s[j])) count--;
	}
	return count === 0;
}

console.log(get('book'));
console.log(get('textbook'));







// function countsTypes(argument) {
// 	let newObject = {
// 		array: 0,
// 		null: 0,
// 		string: 0,
// 		number: 0,
// 		number: 0,
// 		undefined: 0,
// 	};

// 	for (const key in argument) {
// 		let count = 0;
// 		let type = ''

// 		type = typeof (argument[key]);

// 		if(Object.keys(newObject).includes(argument[key])){
// 			argument[key] += 1
// 		}

// 		if (Array.isArray(argument[key])) {
// 			type = 'array';
// 			newObject.array += 1
// 		}

// 		if (argument[key] === undefined) {
// 			type = 'undefined';
// 			newObject.undefined += 1
// 		}

// 		if (argument[key] === null) {
// 			type = 'null';
// 			newObject.null += 1
// 		}

// 		if (argument[key] === 'number') {
// 			type = 'number';
// 			newObject.string += 1
// 		}

// 		if (argument[key] === 'string') {
// 			type = 'string';
// 			newObject.string += 1
// 		}

// 	}
// 	return newObject;
// }
// const argument = { anotherField: [], yetAnother: [] };
// console.log(countsTypes(argument));
