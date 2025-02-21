const cardArray = [
    {
        name : 'veiga',
        img: 'images/veiga.jpg',
    },
    {
        name : 'rios',
        img: 'images/rios.jpg'
    },
    {
        name : 'anibal',
        img: 'images/anibal.jpg'
    },
    {
        name : 'estevao',
        img: 'images/estevao.jpg'
    },
    {
        name : 'piquerez',
        img: 'images/piquerez.jpg'
    },
    {
        name : 'paulinho',
        img: 'images/paulinho.jpg'
    },
    {
        name : 'gomez',
        img: 'images/gomez.jpg'
    },
    {
        name : 'facundo',
        img: 'images/facundo.jpg'
    },
    {
        name : 'weverton',
        img: 'images/weverton.jpg'
    },
    {
        name : 'rocha',
        img: 'images/rocha.jpg'
    },


    {
        name : 'veiga',
        img: 'images/veiga.jpg',
    },
    {
        name : 'rios',
        img: 'images/rios.jpg'
    },
    {
        name : 'anibal',
        img: 'images/anibal.jpg'
    },
    {
        name : 'estevao',
        img: 'images/estevao.jpg'
    },
    {
        name : 'piquerez',
        img: 'images/piquerez.jpg'
    },
    {
        name : 'paulinho',
        img: 'images/paulinho.jpg'
    },
    {
        name : 'gomez',
        img: 'images/gomez.jpg'
    },
    {
        name : 'facundo',
        img: 'images/facundo.jpg'
    },
    {
        name : 'weverton',
        img: 'images/weverton.jpg'
    },
    {
        name : 'rocha',
        img: 'images/rocha.jpg'
    },


]

cardArray.sort(() => 0.5 - Math.random());

const  gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []


function createBoard (){
    for(let i = 0; i < cardArray.length; i++){
       const card = document.createElement('img');
       card.setAttribute('src', 'images/blank.png');
       card.setAttribute('data-id', i)
       card.addEventListener('click', flipCard);
       gridDisplay.appendChild(card);
    }
}

function checkMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

   if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
      }
    else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
   }
   else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again!')
   }
   resultDisplay.textContent = cardsWon.length;
   cardsChosen = [];
   cardsChosenIds = [];

   if(cardsWon.length === cardArray.length/2){
        resultDisplay.innerHTML = "Congratulations, you found them all!!"
   }
}

function flipCard(){
    let cardId = this.getAttribute('data-id');
   // console.log(cardArray[cardId]);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}
createBoard()