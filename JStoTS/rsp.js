"use strict";
let imgCoords = "-10px";
const rsp = {
    ROCK: "-10px",
    SCISSORS: "-153px",
    PAPER: "-300px"
};
const score = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1
};
let interval;
let point = 0;
let timeout;
function intervalMaker() {
    interval = setInterval(() => {
        if (imgCoords === rsp.ROCK) {
            imgCoords = rsp.SCISSORS;
        }
        else if (imgCoords === rsp.SCISSORS) {
            imgCoords = rsp.PAPER;
        }
        else {
            imgCoords = rsp.ROCK;
        }
        ;
        document.querySelector("#computer").style.background = `url(https://en.pimg.jp/023/182/262/1/23182262.jpg) ${imgCoords} 0`;
    }, 100);
}
function timeoutMaker() {
    timeout = setTimeout(intervalMaker, 2200);
}
intervalMaker();
function computerChoice(imgCoords) {
    return Object.keys(rsp).find(rspKey => rsp[rspKey] === imgCoords);
}
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
        // function(this: HTMLButtonElement , e: Event)
        clearTimeout(timeout);
        clearInterval(interval);
        timeoutMaker();
        const myChoice = this.textContent;
        const myScore = score[myChoice];
        const computerScore = score[computerChoice(imgCoords)];
        const diff = myScore - computerScore;
        let rscResult = "5";
        if (diff === 0) {
            console.log("비겼습니다.");
            rscResult = "비겼습니다";
        }
        else if ([-1, 2].includes(diff)) {
            console.log("이겼습니다.");
            rscResult = "이겼습니다";
            point++;
            document.getElementById("rsc-point").textContent = String(point);
        }
        else {
            console.log("졌습니다");
            rscResult = "졌습니다";
            point--;
            document.getElementById("rsc-point").textContent = String(point);
        }
        console.log({ rscResult });
        var resultElement = document.getElementById("rsc-result");
        console.log(resultElement);
        resultElement.innerHTML = rscResult;
    });
});
