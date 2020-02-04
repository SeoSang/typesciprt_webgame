let imgCoords: RSP[keyof RSP] = "-10px"

interface RSP {
  readonly ROCK: "-10px"
  readonly SCISSORS: "-153px"
  readonly PAPER: "-300px"
}
const rsp: RSP = {
  ROCK: "-10px",
  SCISSORS: "-153px",
  PAPER: "-300px"
} as const
const score = {
  ROCK: 0,
  SCISSORS: 1,
  PAPER: -1
} as const

let interval: number
let point: number = 0
let timeout: number
function intervalMaker() {
  interval = setInterval(() => {
    if (imgCoords === rsp.ROCK) {
      imgCoords = rsp.SCISSORS
    } else if (imgCoords === rsp.SCISSORS) {
      imgCoords = rsp.PAPER
    } else {
      imgCoords = rsp.ROCK
    }
    ;(document.querySelector(
      "#computer"
    )! as HTMLDivElement).style.background = `url(https://en.pimg.jp/023/182/262/1/23182262.jpg) ${imgCoords} 0`
  }, 100)
}
function timeoutMaker() {
  timeout = setTimeout(intervalMaker, 2200)
}
intervalMaker()

function computerChoice(imgCoords: RSP[keyof RSP]): keyof RSP {
  return ((Object.keys(rsp) as unknown) as ["ROCK", "SCISSORS", "PAPER"]).find(
    rspKey => rsp[rspKey] === imgCoords
  )!
}

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function(this: HTMLButtonElement, e: Event) {
    // function(this: HTMLButtonElement , e: Event)
    clearTimeout(timeout)
    clearInterval(interval)
    timeoutMaker()
    const myChoice = this.textContent as keyof RSP
    const myScore = score[myChoice]
    const computerScore = score[computerChoice(imgCoords)]
    const diff = myScore - computerScore
    let rscResult: string = "5"
    if (diff === 0) {
      console.log("비겼습니다.")
      rscResult = "비겼습니다"
    } else if ([-1, 2].includes(diff)) {
      console.log("이겼습니다.")
      rscResult = "이겼습니다"
      point++
      ;(document.getElementById("rsc-point") as HTMLHeadingElement)!.textContent = String(point)
    } else {
      console.log("졌습니다")
      rscResult = "졌습니다"
      point--
      ;(document.getElementById("rsc-point") as HTMLHeadingElement)!.textContent = String(point)
    }
    console.log({ rscResult })
    var resultElement = document.getElementById("rsc-result") as HTMLHeadingElement
    console.log(resultElement)
    resultElement.innerHTML = rscResult
  })
})
