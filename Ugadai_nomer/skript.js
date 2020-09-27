let secretNumber;
let userNumber;
let trying=5;
document.querySelector('.check').disabled = true
function check() {
  trying--
    document.querySelector('.attempts').innerHTML = trying
  if (trying==0) {
    document.querySelector('.hint').innerHTML = 'ТЫ ПРОИГРАЛ!!!!!!!! нажми новую игру';
    document.querySelector('.check').disabled = true
  }
userNumber = document.querySelector('input').value
if (secretNumber==userNumber) {
 document.querySelector('.hint').innerHTML = 'ты угадал, компьютер загадал число '+secretNumber;
 document.querySelector('.check').disabled = true
}
if (secretNumber>userNumber) {
  document.querySelector('.hint').innerHTML = 'загаданое число больше !!';
}
if (secretNumber<userNumber) {
  document.querySelector('.hint').innerHTML = 'загаданое число меньше!!';
}
}
function newGame() {
  trying=5
  document.querySelector('.check').disabled= false
secretNumber = Math.ceil(Math.random()*10)
document.querySelector('.hint').innerHTML = 'Компьютер загадал число';
}
