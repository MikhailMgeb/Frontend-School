
function isClosed(symbols) {
    const allBrackets = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    const closed = [
        '}',
        ')',
        ']',
    ];
    const stack = [];
    const arraySymbols = symbols.split('')
    for (let i = 0; i < arraySymbols.length; i++) {
        let curent = arraySymbols[i]
        if (closed.includes(curent)) {
            if(allBrackets[curent] !== stack.pop()) {
                console.log(allBrackets[curent])
                console.log(stack)
                // return false
            }
        } else {
            stack.push(arraySymbols[i])
        }
    }
    return stack.length === 0 ? true : false;
}

const symbols = '{)}'

if (isClosed(symbols)) {
    alert('Скобки закрыты корректно!')
} else {
    alert('Скобки закрыты НЕкорректно!')
}