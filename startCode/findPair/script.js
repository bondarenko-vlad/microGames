const cards = document.querySelectorAll('.card');

let isFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

[...cards].forEach(card => {
  let randomPos = Math.floor(Math.random() * 12);
  card.style.order = randomPos;
});

function flipCard() {
  let item = event.target.parentElement

  if (event.target.parentElement === firstCard) return firstCard;

  item.classList.add('flip');

  if (!isFlippedCard) {
    isFlippedCard = true;
    firstCard = event.target.parentElement;
    return;
  }
  secondCard = event.target.parentElement;
  firstCard.dataset.education === secondCard.dataset.education ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}
function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1000);
} // удаляем классы, чтоб развернуть карты

function resetBoard() {
  [isFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
} //обнуляем переменные

cards.forEach(card => card.addEventListener('click', flipCard));

//addEventListener, removeEventListener
