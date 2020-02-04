const opponent = {
    hero: document.getElementById("rival-hero"),
    deck: document.getElementById("rival-deck"),
    field: document.getElementById("rival-cards"),
    cost: document.getElementById("rival-cost"),
    deckData: [],
    heroData: null,
    feildData: [],
    chosenCard: null,
    chosenCardData: null
};
const me = {
    hero: document.getElementById("my-hero"),
    deck: document.getElementById("my-deck"),
    field: document.getElementById("my-cards"),
    cost: document.getElementById("my-cost"),
    deckData: [],
    heroData: null,
    feildData: [],
    chosenCard: null,
    chosenCardData: null
};
class Hero {
    constructor(mine) {
        this.cost = 0;
        this.att = Math.ceil(Math.random() * 2);
        this.hp = Math.ceil(Math.random() * 5) + 25;
        this.mine = mine;
        this.field = true;
    }
}
class Sub {
    constructor(mine) {
        this.att = Math.ceil(Math.random() * 5);
        this.hp = Math.ceil(Math.random() * 5);
        this.cost = Math.floor((this.att + this.hp) / 2);
        this.mine = mine;
        this.field = false;
    }
}
const turnButton = document.getElementById("turn-btn");
let turn = true; // 누구 턴인지
function initiate() {
    ;
    [opponent, me].forEach(item => {
        item.deckData = [];
        item.heroData = null;
        item.feildData = [];
        item.chosenCard = null;
        item.chosenCardData = null;
    });
    createDeck({ mine: true, count: 5 });
    createDeck({ mine: false, count: 5 });
    createHero({ mine: true });
    createHero({ mine: false });
    redrawScreen({ mine: true });
    redrawScreen({ mine: false });
}
initiate();
function createHero({ mine }) {
    const player = mine ? me : opponent;
    player.heroData = new Hero(mine);
    connectCardDOM({ data: player.heroData, DOM: player.hero, hero: true });
}
function connectCardDOM({ data, DOM, hero = false }) {
    const cardEl = document.querySelector(".card-hidden .card").cloneNode(true);
    cardEl.querySelector(".card-att").textContent = String(data.att);
    cardEl.querySelector(".card-hp").textContent = String(data.hp);
    if (hero) {
        ;
        cardEl.querySelector(".card-cost").style.display = "none";
        const name = document.createElement("div");
        name.textContent = "영웅";
        cardEl.appendChild(name);
    }
    DOM.appendChild(cardEl);
}
function createDeck({ mine, count }) {
    const player = mine ? me : opponent;
    for (let i = 0; i < count; i++) {
        player.deckData.push(new Sub(mine));
    }
    console.log({ player });
    redrawDeck(player);
}
function redrawScreen({ mine }) {
    const player = mine ? me : opponent;
    redrawHero(player);
}
function redrawHero(target) {
    if (!target.heroData) {
        console.error(target);
        throw new Error("heroData가 없습니다");
    }
    target.hero.innerHTML = "";
    connectCardDOM({ data: target.heroData, DOM: target.hero, hero: true });
}
function redrawDeck(target) {
    console.log({ target });
    target.hero.innerHTML = "";
    target.deckData.forEach(data => {
        connectCardDOM({ data: data, DOM: target.deck });
    });
}
