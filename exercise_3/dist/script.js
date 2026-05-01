const techIcons = [
    'html', 'css', 'javascript', 'react', 'tailwind','iris', 'python', 'cpp', 'git', 'github', 'c', 'mongodb'];

let cardsArray = [...techIcons, ...techIcons];
cardsArray.sort(() => Math.random() - 0.5);

console.log(cardsArray);

const gmaeBoard = document.getElementById('game-board');

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

    gmaeBoard.innerHTML = htmlContent;
}

initializeBoard();
