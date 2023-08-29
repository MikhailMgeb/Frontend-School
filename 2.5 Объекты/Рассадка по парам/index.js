let lastNumber = 12;
let multiplicationResult = 1;

for (let i = 0; i <= lastNumber; i++) {
    if (i % 2 === 0) {
        multiplicationResult += multiplicationResult * i;
    }
}