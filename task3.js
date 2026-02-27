// common input
function parse_list(input) {
    if (!input || input.trim() === '') return null;
    let parts = input.split(',').map(part => part.trim());
    let numbers = [];
    for (let i = 0; i < parts.length; i++) {
        let part = parts[i];
        let num = Number(part);
        if (isNaN(num) || !Number.isInteger(num) || num <= 0) return null;
        numbers.push(num);
    }
    return numbers;
}

// task3_1
function sort_numbers(arr) {
    return arr.slice().sort((a, b) => a - b);
}

// task3_1
input = prompt("Введите натуральные числа");
if (input != null) {
    let numbers = parse_list(input);
    if (numbers === null) alert("Некорректный ввод!");
    else alert(sort_numbers(numbers).join(", "));    
}
else alert("Ввод отменён.");
