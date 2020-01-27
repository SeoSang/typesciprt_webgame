// enum
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green

// ?. 연산자에 대해

let check: { doFun: () => void } = {
  doFun(): void {
    console.log("do")
  }
}

function add(a: number, b: number): void {
  console.log(a + b)
}

let x = check?.doFun()
console.log(x)

// 배열

const ar2: number[] = [1, 2, 3]

// 실수로 타입 잘못 타이핑한거 바꾸기 d.ts

const hello: number = 3
const changehello = ((hello as unknown) as string).substr(1, 2)
const div1 = document.createElement("div")
const newDiv1 = div1 as HTMLElement

// 타입 직접 생성

interface myType {
  a: string
  b?: number
}

const tt: myType = { a: "hi" }

// 인터페이스는 여러 개 중첩이 된다. (합쳐진다.) * 타입은 합치는게 안된다.

interface myType {
  c?: number[]
}

// 타입으로 새로운 타입 만들기

type strORnum = string | number

type myType2 =
  | {
      t1: string
      t2: string
    }
  | string

//  객체  여유로운 interface

interface Example {
  a: 3
  b: 7
  [key: string]: number
}

let ex: Example = {
  a: 3,
  b: 7,
  c: 102
}

// ! 의 의미 undefined 뜰 수 있는거를 -> 아냐 그렇지 않아 안나와. 확언해줌.

// ! 를 막아주기 => 혹은 if 문을 사용한다.

// inter

// 전부 import 하겠다 = import * as A from '~~'

// js 는 private , public 구분이 매우 힘듦 / 최신문법에서 # 들어오긴 했는데

// ts 는 private protected public 다 가능

// private = 본인만 접근가능
// protected = 내 클래스, 상속받은 자식만 가능
// pulblic = 인스턴스까지 모두 다 접근 가능

// interface 는 implements 로 가져옴
// class 상속받는거는 extends

// interface로 함수, 객체도 가능

interface Example6 {
  (a: number, b: number): number
  add_num: (c: number, d: number) => number
}

interface ExampleClass {
  new (a: number, b: number): number
}

/* 여러 타입들을 인자로 받을 수 있는 함수를 만들고 싶다 
=> generic */

interface obj<T> {
  add: (a: T, b: T) => T
}

const z1: obj<number> = {
  add: (a, b) => a + b
}
const z2: obj<string> = {
  add: (a, b) => a + b
}

// extends = type 제한 ,  extends A  면 A 거나 A의 자식

interface obj2<T extends number> {
  add: (a: T, b: T) => T
  // T는 number여야 한다.
}

// 제네릭 이용 예시)  e에 손 올려놔도 타입 나온다.
// find 형식정의 가보면 왜그런지 알 수 있다.

const found = ["a", "b", "c"].find(e => e == "c")

// 직접 해보기

function forEach<T>(arr5: T[], callback: (item: T) => void) {
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
