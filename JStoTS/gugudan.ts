const NUMBER_DAN = 19
const RANDOM_NUM1 = Math.ceil(Math.random() * NUMBER_DAN)
const RANDOM_NUM2 = Math.ceil(Math.random() * NUMBER_DAN)

let firstNum = RANDOM_NUM1
let secondNum = RANDOM_NUM2
let guguResult = firstNum * secondNum
const guguWord = document.createElement("div")
guguWord.textContent = `${firstNum} 곱하기 ${secondNum} 는?`
document.body.append(guguWord)

const guguForm = document.createElement("form")
document.body.append(guguForm)

const guguLabel = document.createElement("label")
guguLabel.textContent = "정답 : "
guguForm.appendChild(guguLabel)

const guguInput = document.createElement("input")
guguInput.type = "number"
guguForm.appendChild(guguInput)

const guguButton = document.createElement("button")
guguButton.textContent = "입력"
guguForm.appendChild(guguButton)

const resultDiv = document.createElement("div")
document.body.append(resultDiv)

guguForm.addEventListener("submit", e => {
  e.preventDefault()
  if (guguResult === Number(guguInput.value)) {
    resultDiv.textContent = "정답!"
    firstNum = RANDOM_NUM1
    secondNum = RANDOM_NUM2
    guguResult = firstNum * secondNum
    guguWord.textContent = `${firstNum} 곱하기 ${secondNum} 는?`
    guguInput.value = ""
    guguInput.focus()
  } else {
    resultDiv.textContent = "땡!"
    guguInput.value = ""
    guguInput.focus()
  }
})
