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
    $templatecard.querySelector("img").setAttribute("src", el.img);
    $templatecard.querySelector("img").setAttribute("alt", el.title);
    $templatecard.querySelector("h5").textContent = el.title;
    
    let $clone = document.importNode($templatecard, true);
    $fragment.appendChild($clone);   
});

$templatecard.appendChild($fragment);
console.log($cards);