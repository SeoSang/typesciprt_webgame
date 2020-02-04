export interface Card {
  att: number
  hp: number
  cost: number
}

export interface Player {
  hero: HTMLDivElement
  deck: HTMLDivElement
  field: HTMLDivElement
  cost: HTMLDivElement
  deckData: Card[]
  heroData: Card | null
  feildData: Card[]
  chosenCard: HTMLDivElement | null
  chosenCardData: Card | null
}
