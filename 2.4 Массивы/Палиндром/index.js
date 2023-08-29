let askUser = prompt('Пришли слово на проверку');
let newAnswer = '';

for (let i = askUser.length - 1; i >= 0; i -= 1) {
	newAnswer += (askUser[i]);
}
console.log(newAnswer);

if (newAnswer === askUser) {
	alert('Это Палиндром')
} else {
	alert('Это не Палиндром')
}