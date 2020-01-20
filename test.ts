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
