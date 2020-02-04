import React, { useState, createRef } from "react"
import Try from "./Try.jsx"

// 임의의 4자리 다 다른 숫자 받아오기 (문자열 배열)
const getRandomNumbers = () => {
  const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var randomNum = []
  for (var i = 0; i < 4; i++) {
    const pickOneEachNum = num.splice(Math.ceil(Math.random() * 9) - i - 1, 1)[0]
    randomNum.push(pickOneEachNum)
  }
  return randomNum
}

const duplicateCheck = n => {
  if (n.slice(1, 4).includes(n[0])) return false
  if (n.slice(2, 4).includes(n[1]) || n[1] === n[0]) return false
  if (n.slice(0, 2).includes(n[2]) || n[2] === n[3]) return false
  if (n.slice(0, 3).includes(n[3])) return false
  return true
}

const NumberBaseball = () => {
  const [result, setResult] = useState("")
  const [value, setValue] = useState("")
  const [answer, setAnswer] = useState(getRandomNumbers())
  const [tries, setTries] = useState([])

  const onSubmitForm = e => {
    e.preventDefault()
    // 정답일 경우
    if (value.length !== 4 || isNaN(+value)) {
      alert("4자리 숫자여야만 합니다요")
    } else if (value.includes("0")) {
      alert("0은 포함이 불가능합니다요")
    } else if (!duplicateCheck(value)) {
      alert("숫자는 중복되면 안돼요!")
    } else if (value === answer.join("")) {
      setResult("정답입니다!")
      setTries([...tries, { try: value, result: "홈런" }])
      alert("홈런!! 한번 더 하시죠. 거절은 못합니다 ㅎㅎ")
      setValue("")
      setAnswer(getRandomNumbers())
      setTries([])
      setResult("")
    }
    // 오답일 경우
    else {
      let strike = 0
      let ball = 0
      // 10번 넘게틀림 리겜
      if (tries.length >= 9) {
        alert(`10번 넘게틀려서 실패! 답은 ${answer} 였습니다ㅎㅎ`)
        setAnswer(getRandomNumbers())
        setTries([])
        setResult("")
      } else {
        for (var j = 0; j < 4; j++) {
          if (value[j] === answer[j]) {
            strike += 1
          } else if (answer.includes(value[j])) {
            ball += 1
          }
        }
        1, 2, 5
        setResult(`${strike} strike and ${ball} ball`)
        const RESULT = `${strike} strike and ${ball} ball`
        setTries([...tries, { try: value, result: RESULT }])
        console.log({ tries })
      }
      setValue("")
    }
    inputFocus()
  }

  const onChangeInput = e => {
    e.preventDefault()
    setValue(e.target.value)
  }

  let valueInput = createRef()

  const inputFocus = () => {
    valueInput.current.focus()
  }

  return (
    <React.Fragment>
      <div className="gugudanTitle">
        <h1>숫자야구</h1>
      </div>
      <div className="gugudan">
        <h1>4자리 숫자를 맞춰보세요</h1>
        <h1>{result}</h1>
        <form onSubmit={onSubmitForm}>
          <input ref={valueInput} maxLength={4} value={value} onChange={onChangeInput}></input>
        </form>
        <ul>
          {tries.map((tr, i) => (
            <Try key={`${i}차 시도 입니다.`} tryInfo={tr}></Try>
          ))}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default NumberBaseball
