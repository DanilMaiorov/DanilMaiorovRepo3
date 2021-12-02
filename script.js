'use strict';


let randomNumber = Math.floor(Math.random() * 100 );

function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}
  
function secretNumber () {

    let userNumber = prompt('Угадай число от 1 до 100');
        
     console.log(userNumber);
    console.log(randomNumber);

     if(isNumber(userNumber)) {
         userNumber = +userNumber;

        if (userNumber > randomNumber) {
        alert ('Загаданное число меньше!');

        } else if (userNumber < randomNumber) {
        alert ('Загаданное число больше!');

        } else if (userNumber === randomNumber) {
        alert ('Поздравляю, Вы угадали!!!!');
            
        return userNumber;
        }        

    } else if (userNumber === null) {
        confirm('Игра окончена!'); 

        return;
    } else {
        alert ('Введите числовое значение, мой друг!');
    }
        return secretNumber();
}
secretNumber();


   
   





