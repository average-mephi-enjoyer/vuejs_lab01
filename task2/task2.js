// ИНСТРУМЕНТЫ
// task2_1 array
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// task2_4 class
const Counter = {
    count: 0,
    add: function(value) {
        this.count += value;
    },
    sub: function(value) {
        this.count -= value;
    }
};

// task2_3
function is_prime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    let limit = Math.floor(Math.sqrt(num));
    for (let i = 3; i <= limit; i += 2)
        if (num % i === 0) return false;
    return true;
}

// task2_3
function get_first_primes(n) {
    let primes = [];
    let num = 2;
    while (primes.length < n) {
        if (is_prime(num)) primes.push(num);
        num++;
    }
    return primes;
}

//task2_6
function is_palindrome(str) {
    let cleaned = str.replace(/[^a-zA-Zа-яёА-ЯЁ0-9]/g, '').toLowerCase();
    let reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}


// ДИАЛОГИ
// task2_2
function dialog_months(){
    let input = prompt("Введите номер месяца (1-12)");
    if (input != null) {
        let monthNumber = parseInt(input, 10);
        if (!isNaN(monthNumber) && Number.isInteger(monthNumber) && monthNumber >= 1 && monthNumber <= 12) alert(months[monthNumber - 1]);
        else alert("Некорректный номер месяца");
    }
}

// task2_3
function dialog_primes(){
    let input = prompt("Введите количество простых чисел");
    if (input != null){
        let n = parseInt(input, 10);
        if (isNaN(n) || !Number.isInteger(n) || n <= 0) alert("Некорректный ввод!");
        else {
            let primes = get_first_primes(n);
            alert(primes.join(" "));
        }
    }
}

// task2_4
function dialog_counter(){
    let input, choice;
    while (true){
        alert("Текущее значение: " + Counter.count);
        choice = prompt(`Выберите опцию:
            1: добавить число;
            2: вычесть число;
            0: завершить работу со счётчиком.
            `)
        if (choice === null) break;
        choice = choice.trim();
        if (choice === "") continue;
        if (choice === "0") break;
        if (choice === "1"){
            input = prompt("Введите число для добавления");
            if (input !== null) {
                let add_value = parseFloat(input);
                if (!isNaN(add_value)) {
                    Counter.add(add_value);
                    alert("Результат: " + Counter.count);
                }
            }
            else alert("Некорректный ввод!")
        } 
        else if (choice === "2"){
            input = prompt("Введите число для вычитания");
            if (input !== null) {
                let sub_value = parseFloat(input);
                if (!isNaN(sub_value)) {
                    Counter.sub(sub_value);
                    alert("Результат: " + Counter.count);
                }
            }
            else alert("Некорректный ввод!"); 
        }
        else alert("Некорректный ввод!")
    }
}

// task2_5
function dialog_sep(){
    let input = prompt("Введите слова через запятую");
    if (input === null) alert("Ввод отменён.");
    else if (input.trim() === "") alert("Вы ничего не ввели.");
    else alert("Результат: " + input.replace(/,/g, '.'));
}

// task2_6
function dialog_pal(){
    input = prompt("Введите строку, проверим, палиндром ли она");
    if (input != null) {
        if (input === "") alert("Пустая строка");
        else if (is_palindrome(input)) alert("Да");
        else alert("Нет");
    }
    else alert("Ввод отменён.");
}


// НАЧАЛО ВЫПОЛНЕНИЯ ЗДЕСЬ!!!
while (true) {
    let choice = prompt(`
        Выберите задание:
        1: выбор месяца по номеру;
        2: вывод простых чисел;
        3: работа с объектом Counter;
        4: разделение слов точками;
        5: проверка слова на палиндром;
        0: завершить работу со страницей.
        `);
    if (choice === null) break;
    choice = choice.trim();
    if (choice === "") continue;
    if (choice === "0") break;

    const funcs = { 1: dialog_months, 2: dialog_primes, 3: dialog_counter, 4: dialog_sep, 5: dialog_pal };
    if (funcs[choice]) funcs[choice]();
    else alert("Некорректный выбор!");
  }
