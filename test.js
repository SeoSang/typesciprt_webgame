"use strict";
var _a;
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
// ?. 연산자에 대해
let check = {
    doFun() {
        console.log("do");
    }
};
function add(a, b) {
    console.log(a + b);
}
let x = (_a = check) === null || _a === void 0 ? void 0 : _a.doFun();
console.log(x);
// 배열
const ar2 = [1, 2, 3];
// 실수로 타입 잘못 타이핑한거 바꾸기 d.ts
const hello = 3;
const changehello = hello.substr(1, 2);
const div1 = document.createElement("div");
const newDiv1 = div1;
const tt = { a: "hi" };
let ex = {
    a: 3,
    b: 7,
    c: 102
};
// ! 의 의미 undefined 뜰 수 있는거를 -> 아냐 그렇지 않아 안나와. 확언해줌.
