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

// common input 3_{1..3}
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

// task3_5
function copy_obj(obj, copied = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (copied.has(obj)) return copied.get(obj);

    let copy;
    if (Array.isArray(obj)) {
        copy = [];
        copied.set(obj, copy);                  // new object
        for (let i = 0; i < obj.length; i++) {  // deep copy transmission
            copy[i] = copy_obj(obj[i], copied);
        }
    }
    else if (obj instanceof Date) copy = new Date(obj);
    else if (obj instanceof RegExp) copy = new RegExp(obj);
    else if (obj instanceof Map) {
        copy = new Map();
        copied.set(obj, copy);  // new object
        obj.forEach((value, key) => {       // deep copy transmission
            copy.set(copy_obj(key, copied), copy_obj(value, copied));
        });
    }
    else if (obj instanceof Set) {
        copy = new Set();
        copied.set(obj, copy);
        obj.forEach(value => {      // deep copy transmission
            copy.add(copy_obj(value, copied));
        });
    }
    else {
        copy = Object.create(Object.getPrototypeOf(obj));
        copied.set(obj, copy);
        for (let key in obj)
            if (obj.hasOwnProperty(key)) copy[key] = copy_obj(obj[key], copied);    // собственное св-во, не ссылка
    }
    return copy;
}


function safe_json(obj) {
    const seen = new WeakSet();
    return JSON.stringify(obj, (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) return '[Circular]';
            seen.add(value);
        }
        return value;
    }, 2);
}

/*
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
*/
// task3_5
let test = {
    name: "test",
    numbers: [1, 2, 3],
    date: new Date(),
    self: null
};
test.self = test;
let copy = copy_obj(test);
alert("Оригинал:\n" + safe_json(test));
alert("Копия:\n" + safe_json(copy));
alert("Содержимое одинаково?\n" + 
      (JSON.stringify(test, (k, v) => typeof v === 'object' && v !== null ? '[Object]' : v) === 
       JSON.stringify(copy, (k, v) => typeof v === 'object' && v !== null ? '[Object]' : v) ? "Да" : "Нет"));
alert("Объекты разные? " + (test !== copy ? "Да" : "Нет"));
