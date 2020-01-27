import { Card, Player } from "./types"
import * as A from "./common"

const opponent: Player = {
  hero: document.getElementById("rival-hero") as HTMLDivElement,
  deck: document.getElementById("rival-deck") as HTMLDivElement,
  field: document.getElementById("rival-cards") as HTMLDivElement,
  cost: document.getElementById("rival-cost") as HTMLDivElement,
  deckData: [],
  heroData: null,
  feildData: [],
  chosenCard: null,
  chosenCardData: null
}
const me: Player = {
  hero: document.getElementById("my-hero") as HTMLDivElement,
  deck: document.getElementById("my-deck") as HTMLDivElement,
  field: document.getElementById("my-cards") as HTMLDivElement,
  cost: document.getElementById("my-cost") as HTMLDivElement,
  deckData: [],
  heroData: null,
  feildData: [],
  chosenCard: null,
  chosenCardData: null
}

class Hero implements Card {
  public att: number
  public hp: number
  public cost: number
  public mine: boolean
  public field: boolean
  constructor(mine: boolean) {
    this.cost = 0
    this.att = Math.ceil(Math.random() * 2)
    this.hp = Math.ceil(Math.random() * 5) + 25
    this.mine = mine
    this.field = true
  }
}

class Sub implements Card {
  public att: number
  public hp: number
  public field: boolean
  public cost: number
  public mine: boolean
  constructor(mine: boolean) {
    this.att = Math.ceil(Math.random() * 5)
    this.hp = Math.ceil(Math.random() * 5)
    this.cost = Math.floor((this.att + this.hp) / 2)
    this.mine = mine
    this.field = false
  }
}

const turnButton = document.getElementById("turn-btn") as HTMLButtonElement
let turn = true // 누구 턴인지

function initiate() {
  ;[opponent, me].forEach(item => {
    item.deckData = []
    item.heroData = null
    item.feildData = []
    item.chosenCard = null
    item.chosenCardData = null
  })
  createDeck({ mine: true, count: 5 })
  createDeck({ mine: false, count: 5 })
  createHero({ mine: true })
  createHero({ mine: false })
  redrawScreen({ mine: true })
  redrawScreen({ mine: false })
}

initiate()

function createHero({ mine }: { mine: boolean }) {
  const player = mine ? me : opponent
  player.heroData = new Hero(mine)
  connectCardDOM({ data: player.heroData, DOM: player.hero, hero: true })
}

interface A {
  data: Card
  DOM: HTMLDivElement
  hero?: boolean
}

function connectCardDOM({ data, DOM, hero = false }: A) {
  const cardEl = document.querySelector(".card-hidden .card")!.cloneNode(true) as HTMLDivElement
  cardEl.querySelector(".card-att")!.textContent = String(data.att)
  cardEl.querySelector(".card-hp")!.textContent = String(data.hp)
  if (hero) {
    ;(cardEl.querySelector(".card-cost") as HTMLDivElement).style.display = "none"
    const name = document.createElement("div")
    name.textContent = "영웅"
    cardEl.appendChild(name)
  }
  DOM.appendChild(cardEl)
}

function createDeck({ mine, count }: { mine: boolean; count: number }) {
  const player = mine ? me : opponent
  for (let i: number = 0; i < count; i++) {
    player.deckData.push(new Sub(mine))
  }
  console.log({ player })
  redrawDeck(player)
}

function redrawScreen({ mine }: { mine: boolean }) {
  const player = mine ? me : opponent
  redrawHero(player)
}

function redrawHero(target: Player) {
  if (!target.heroData) {
    console.error(target)
    throw new Error("heroData가 없습니다")
  }
  target.hero.innerHTML = ""
  connectCardDOM({ data: target.heroData!, DOM: target.hero, hero: true })
}

function redrawDeck(target: Player) {
  console.log({ target })
  target.hero.innerHTML = ""
  target.deckData.forEach(data => {
    connectCardDOM({ data: data, DOM: target.deck })
  })
}
