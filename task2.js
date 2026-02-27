const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

function is_prime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    let limit = Math.floor(Math.sqrt(num));
    for (let i = 3; i <= limit; i += 2)
        if (num % i === 0) return false;
    return true;
}


function get_first_primes(n) {
    let primes = [];
    let num = 2;
    while (primes.length < n) {
        if (is_prime(num)) primes.push(num);
        num++;
    }
    return primes;
}


let input = prompt("Введите номер месяца (1-12):");
if (input != null) {
    let monthNumber = parseInt(input, 10);
    if (!isNaN(monthNumber) && Number.isInteger(monthNumber) && monthNumber >= 1 && monthNumber <= 12) {
        alert(months[monthNumber - 1]);
    }
    else {
        alert("Некорректный номер месяца");
    }
}

input = prompt("Введите количество простых чисел");
if (input != null){
    let n = parseInt(input, 10);
    if (isNaN(n) || !Number.isInteger(n) || n <= 0) alert("Некорректный ввод!");
    else {
        let primes = get_first_primes(n);
        alert(primes.join(" "));
    }
}