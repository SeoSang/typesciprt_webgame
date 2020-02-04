import React, { useState } from "react"
import "./Gugudan.css"

const Gugudan = () => {
  const NUMBER_DAN = 9
  const RANDOM_NUM1 = Math.ceil(Math.random() * NUMBER_DAN)
  const RANDOM_NUM2 = Math.ceil(Math.random() * NUMBER_DAN)
  const [firstNum, setFirstNum] = useState(RANDOM_NUM1)
  const [secondNum, setSecondNum] = useState(RANDOM_NUM2)
  const [answer, setAnswer] = useState("")
  const [result, setResult] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    setAnswer()
    console.log({ answer })
    console.log({ firstNum })
    console.log({ secondNum })
    if (parseInt(answer) === firstNum * secondNum) {
      setResult("정답입니다! 정답 : " + answer)
      setAnswer("")
      setFirstNum(RANDOM_NUM1)
      setSecondNum(RANDOM_NUM2)
    } else {
      setResult("땡!")
      setAnswer("")
    }
  }

  const checkNum = n => {
    n = Number(n)
    return Number.isInteger(n)
  }

  const handleChange = event => {
    event.preventDefault()
    if (checkNum(event.target.value)) {
      setAnswer(event.target.value)
    }
  }

  return (
    <React.Fragment>
      <div className="gugudanTitle">
        <h1>구구단을 외자</h1>
      </div>
      <div className="gugudan">
        <div>
          <h1 className="gugudan__question">
            {firstNum} 곱하기 {secondNum} 은 ?
          </h1>
          <form className="gugudan__form" onSubmit={handleSubmit}>
            <fieldset className="gugudan__feildset">
              <label>정답</label>
              <input
                className="gugudan__ansInput"
                placeholder="정답은?"
                value={answer}
                onChange={handleChange}
              ></input>
              <button>입력</button>
            </fieldset>
          </form>
        </div>
        <div className="guguan__result">{result}</div>
      </div>
    </React.Fragment>
  )
}

export default Gugudan
// module.exports = Gugudan
