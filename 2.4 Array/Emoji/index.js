var countDigits = function(num) {
    let count = 0
    let arrayNum = Array.from(String(num))
    for(let i = 0; i < arrayNum.length - 1; i++) {
        if (num % arrayNum[i] === 0) {
            count++
        }
    }
    return count
};

countDigits(1248)