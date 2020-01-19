var NUMBER_DAN = 19;
var RANDOM_NUM1 = Math.ceil(Math.random() * NUMBER_DAN);
var RANDOM_NUM2 = Math.ceil(Math.random() * NUMBER_DAN);
var firstNum = RANDOM_NUM1;
var secondNum = RANDOM_NUM2;
var result = firstNum * secondNum;
var word = document.createElement("div");
word.textContent = firstNum + " \uACF1\uD558\uAE30 " + secondNum + " \uB294?";
document.body.append(word);
var form = document.createElement("form");
document.body.append(form);
var label = document.createElement("label");
label.textContent = "정답 : ";
form.appendChild(label);
var input = document.createElement("input");
input.type = "number";
form.appendChild(input);
var button = document.createElement("button");
button.textContent = "입력";
form.appendChild(button);
var resultDiv = document.createElement("div");
document.body.append(resultDiv);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (result === Number(input.value)) {
        resultDiv.textContent = "정답!";
        firstNum = RANDOM_NUM1;
        secondNum = RANDOM_NUM2;
        result = firstNum * secondNum;
        word.textContent = firstNum + " \uACF1\uD558\uAE30 " + secondNum + " \uB294?";
        input.value = "";
        input.focus();
    }
    else {
        resultDiv.textContent = "땡!";
        input.value = "";
        input.focus();
    }
});
