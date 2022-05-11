const $cards = document.querySelector(".cards");
const $templatecard = document.querySelector("#template-card");
const $fragment = document.createDocumentFragment();

const cardsContent = [
    {
        title:"Tower",
        img: "css/images/eiffel-tower.svg"
    },
    {
        title:"Gameboy",
        img:"css/images/gameboy.svg"
    },
    {
        title:"Macbook",
        img:"css/images/macbook.svg",
    },
    {
        title:"Working",
        img:"css/images/working.svg"
    }
];

cardsContent.forEach((el) => {
    $cards.firstElementChild.setAttribute("src", el.img);
    $cards.firstElementChild.setAttribute("alt", el.title);
    $cards.lastElementChild.textContent = el.title;
    
    let $clone = document.importNode($cards, true);
    $fragment.appendChild($clone);   
});
$templatecard.removeChild($cards)
$templatecard.appendChild($fragment);
console.log($cards);