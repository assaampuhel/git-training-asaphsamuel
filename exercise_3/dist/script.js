const techIcons = [
    'html', 'css', 'js', 'react', 'tailwindcss','iris', 'python', 'cpp', 'git', 'github', 'c', 'mongodb'];

let cardsArray = [...techIcons, ...techIcons];
cardsArray.sort(() => Math.random() - 0.5);

console.log(cardsArray);

const gameBoard = document.getElementById('game-board');

function initializeBoard(){

    let htmlContent = '';

    cardsArray.forEach((card, index) => {
        htmlContent += 
            `<div class="card relative aspect-[3/4] cursor-pointer [perspective:1000px] group" data-icon="${card}">
                <div class="inner-card w-full h-full relative transition-transform duration-500 [transform-style:preserve-3d]">
                    
                    <!-- Front -->
                    <div class="absolute inset-0 w-full h-full bg-indigo-500 rounded-xl shadow-sm border-2 border-indigo-600 flex items-center justify-center [backface-visibility:hidden]">
                        <span class="text-3xl text-white opacity-50">?</span>
                    </div>

                    <!-- Back -->
                    <div class="absolute inset-0 w-full h-full bg-white rounded-xl shadow-sm border-2 border-slate-300 flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <img src="./assets/icons/${card}.png" alt="${card}" class="w-1/2 h-1/2 object-contain pointer-events-none">
                    </div>

                </div>
            </div>`;
    })

    gameBoard.innerHTML = htmlContent;
}

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function attachEventListeners(){
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => flipCard(card));
    });
}

function flipCard(clickedCard){
    if (lockBoard) return;

    if(clickedCard === firstCard) return;

    const innerCard = clickedCard.querySelector('.inner-card');
    innerCard.classList.add('[transform:rotateY(180deg)]');

    if(hasFlippedCard === false){
        hasFlippedCard = true;
        firstCard = clickedCard;
        return;
    }

    hasFlippedCard = false;
    secondCard = clickedCard;

    checkMatch();
}

function checkMatch(){
    let isMatch = (firstCard.dataset.icon === secondCard.dataset.icon)

    if(isMatch){
        disableCards();
    }else{
        unflipCards();
    }
}

function disableCards(){

    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    firstCard.classList.remove('cursor-pointer');
    secondCard.classList.remove('cursor-pointer');

    firstCard.classList.add('pointer-events-none');
    secondCard.classList.add('pointer-events-none');

    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function unflipCards(){
    lockBoard = true;

    setTimeout(() => {
        firstCard.querySelector('.inner-card').classList.remove('[transform:rotateY(180deg)]');
        secondCard.querySelector('.inner-card').classList.remove('[transform:rotateY(180deg)]');

        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }, 1000);
}

initializeBoard();
attachEventListeners();