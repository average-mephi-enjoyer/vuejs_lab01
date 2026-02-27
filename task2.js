const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let input = prompt("Введите номер месяца (1-12):");
if (input === null) {
    alert("Некорректный номер месяца");
}
else {
    let monthNumber = parseInt(input, 10);
    if (!isNaN(monthNumber) && Number.isInteger(monthNumber) && monthNumber >= 1 && monthNumber <= 12) {
        alert(months[monthNumber - 1]);
    }
    else {
        alert("Некорректный номер месяца");
    }
}