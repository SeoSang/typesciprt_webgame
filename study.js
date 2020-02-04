"use strict"
var _a
// enum
var Color
;(function(Color) {
  Color[(Color["Red"] = 0)] = "Red"
  Color[(Color["Green"] = 1)] = "Green"
  Color[(Color["Blue"] = 2)] = "Blue"
})(Color || (Color = {}))
let c = Color.Green
// ?. 연산자에 대해
let check = {
  doFun() {
    console.log("do")
  }
}
function add(a, b) {
  console.log(a + b)
}
let x = (_a = check) === null || _a === void 0 ? void 0 : _a.doFun()
console.log(x)
// 배열
const ar2 = [1, 2, 3]
// 실수로 타입 잘못 타이핑한거 바꾸기 d.ts
const hello = 3
const changehello = hello.substr(1, 2)
const div1 = document.createElement("div")
const newDiv1 = div1
const tt = { a: "hi" }
let ex = {
  a: 3,
  b: 7,
  c: 102
}
const z1 = {
  add: (a, b) => a + b
}
const z2 = {
  add: (a, b) => a + b
}
// 제네릭 이용 예시)  e에 손 올려놔도 타입 나온다.
// find 형식정의 가보면 왜그런지 알 수 있다.
const found = ["a", "b", "c"].find(e => e == "c")
// 직접 해보기
function forEach(arr5, callback) {
  for (let i = 0; i < arr5.length; i++) {
    callback(arr5[i])
  }
}
forEach([1, 2, 3], n => console.log(n))
forEach(["a", "b", "c"], str => console.log(str))
// Array<T> == T[]  ,  Array <(T extends S)> == (T extend S)[]
// import {Action} from 'redux' 가능
// <reference types="symbol-observable" />
// -> 이거의 tpye을 참조하고있다.
// -> 다른 패키지의 type을 참조할 때 쓴다.
// definitelyTyped => 엄청 나게 많은 타입들이 있다. 가져다 쓰면 됨.
// export = jQuery  => import * as J from 'jQuery'
//                  => import J = require('jQuery)
// nmaespace 덕에 React.Component 이런식으로 가능
