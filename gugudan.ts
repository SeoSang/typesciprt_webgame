const NUMBER_DAN = 19
const RANDOM_NUM1 = Math.ceil(Math.random() * NUMBER_DAN)
const RANDOM_NUM2 = Math.ceil(Math.random() * NUMBER_DAN)

let firstNum = RANDOM_NUM1
let secondNum = RANDOM_NUM2
let result = firstNum * secondNum

const word = document.createElement("div")
word.textContent = `${firstNum} 곱하기 ${secondNum} 는?`
document.body.append(word)

const form = document.createElement("form")
document.body.append(form)

const label = document.createElement("label")
label.textContent = "정답 : "
form.appendChild(label)

const input = document.createElement("input")
input.type = "number"
form.appendChild(input)

const button = document.createElement("button")
button.textContent = "입력"
form.appendChild(button)

const resultDiv = document.createElement("div")
document.body.append(resultDiv)

form.addEventListener("submit", e => {
  e.preventDefault()
  if (result === Number(input.value)) {
    resultDiv.textContent = "정답!"
    firstNum = RANDOM_NUM1
    secondNum = RANDOM_NUM2
    result = firstNum * secondNum
    word.textContent = `${firstNum} 곱하기 ${secondNum} 는?`
    input.value = ""
    input.focus()
  } else {
    resultDiv.textContent = "땡!"
    input.value = ""
    input.focus()
  }
})
