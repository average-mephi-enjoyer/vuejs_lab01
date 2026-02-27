// task3_4
class Stack {
    constructor() {
        this.items = [];
        this.head = -1;
    }

    push(value) {
        this.head++;
        this.items[this.head] = value;
    }

    pop() {
        if (this.empty()) return undefined;
        let value = this.items[this.head];
        this.head--;
        return value;
    }

    empty() {
        return this.head === -1;
    }

    size() {
        return this.head + 1;
    }
}

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

// task3_2
function mod_5(numbers) {
    return numbers.map(num => num % 5);
}

// task3_3
function median(...numbers) {
    if (numbers.length === 0) return undefined;
    let sorted = [...numbers].sort((a, b) => a - b);
    let mid_ind = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) return (sorted[mid_ind - 1] + sorted[mid_ind]) / 2;
    else return sorted[mid_ind];
}

// task3_4
function check_bracket_sequence(str) {
    let stack = new Stack();
    for (let char of str) {
        if (char === '(') stack.push(char);
        else if (char === ')') {
            if (stack.empty()) return false;
            stack.pop();
        } 
        else return false;
    }
    return stack.empty();
}

// task3_1
input = prompt("Введите натуральные числа");
if (input != null) {
    let numbers = parse_list(input);
    if (numbers === null) alert("Некорректный ввод!");
    else alert(sort_numbers(numbers).join(", "));    
}
else alert("Ввод отменён.");

// task3_2
input = prompt("Введите натуральные числа");
if (input != null) {
    let numbers = parse_list(input);
    if (numbers === null) alert("Некорректный ввод!");
    else alert(mod_5(numbers).join(", "));    
}
else alert("Ввод отменён.");

// task3_3
let classic = median(5, 2, 9, 5, 2);
alert(`median(5, 2, 9, 5, 2) = ${classic}`);
input = prompt("Введите натуральные числа через запятую");
if (input !== null){
    let arr = parse_list(input);
    if (arr != null) alert(`Медиана равна ${median(...arr)}`);
    else alert("Некорректный ввод!");
}
else alert("Ввод отменён.");

// task3_4
input = prompt("Enter brackets sequence");
if (input !== null) alert(check_bracket_sequence(input) ? "Правильная" : "Неправильная");
