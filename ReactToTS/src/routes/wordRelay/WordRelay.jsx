import React, { useState } from "react"
import "./WordRelay.css"

const WordRelay = () => {
  const [word, setWord] = useState("없음")
  const [answer, setAnswer] = useState("")
  const [result, setResult] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    setAnswer()
    const WORD_LAST_INDEX = word.length - 1
    if (answer[0] === word[WORD_LAST_INDEX] || word == "없음") {
      setResult("굳ㅋ")
      setWord(answer)
      setAnswer("")
    } else {
      setResult("땡!")
      setAnswer("")
    }
  }

  const handleChange = event => {
    event.preventDefault()
    setAnswer(event.target.value)
  }

  return (
    <React.Fragment>
      <div className="gugudanTitle">
        <h1>끝말잇기를 해</h1>
      </div>
      <div className="gugudan">
        <div>
          <h1 className="gugudan__question">현재단어 : {word}</h1>
          <form className="gugudan__form" onSubmit={handleSubmit}>
            <fieldset className="gugudan__feildset">
              <label>입력</label>
              <input
                className="gugudan__ansInput"
                placeholder="단어입력해"
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

export default WordRelay
// module.exports = Gugudan
