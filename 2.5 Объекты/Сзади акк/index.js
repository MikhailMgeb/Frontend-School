let example = { cool: 'yes', option: true, cold: 'no' };
example = Object.values(example)
let someExample = example.map(example => `непонятный массив ${example}`)
console.log(someExample)