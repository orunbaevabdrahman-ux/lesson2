const num1 = Number(prompt("Введи первое число:"));
const num2 = Number(prompt("Введи второе число:"));
const num3 = Number(prompt("Введи третье число:"));
const maxNumber = Math.max(num1, num2, num3);
console.log("Самое большое число:", maxNumber); 

const age = Number(prompt("Сколько тебе лет?"));
const isAdult = age >=18 && age <= 60;
console.log(isAdult);

const username = "admin";
const password = "12345";
const usernameInput = prompt("Введи username:");
const passwordInput = prompt("Введи password:");
if (usernameInput === username && passwordInput === password) {
    console.log("Вы  вошли в систему");
} else {
    console.log("Некорректный username или пароль");
}


const answer1 = "Bishkek";
const answer2 = "4";
const answer3 = "Kyrgyzstan";
const answer4 = "Sadyr japarov";
const answer5 = "10";
let score = 0;
const userAnswer1 = prompt("1.Столица Кыргызстана?");
const userAnswer2 = prompt("2.2+2=?");
const userAnswer3 = prompt("3.Где находится Бишкек арена? ");
const userAnswer4 = prompt("4.prezident KGZ?");
const userAnswer5 = prompt("5.5+5=?");
if (userAnswer2.trim() === answer2) {
    score++;
}
if (userAnswer3.trim().toLowerCase() === answer3) {
    score++;
}
if (userAnswer4.trim() === answer4){
    score++;
}
if (userAnswer5.trim().toLowerCase() === answer5) {
    score++;
}
console.log("Количество праввильных ответов:", score);



const number = Number(prompt("Введи число:"));
if (number % 2 === 0 || number % 7 === 0) {
    console.log("ok");
} else{
    console.log("no");
}


const purchase = Number(prompt("Введи сумму покупки:"));
if (purchase > 5000) {
const finalPrice = purchase * 0.9;
console.log("Сумма со скидкой:");
} else {
    console.log("Сумма покупки:", purchase);
}
const letter = prompt("Введи одну английскую букву");
const isLowel =["a", "e", "i", "u", "o"].includes (
    letter.toLowerCase()
)
console.log(isLowel);


const baseNumber = Number(prompt("Введи число:"));
const percent = Number(prompt("Введи процент:"));
const result = baseNumber * percent / 100;
console.log("Результат:", result);


