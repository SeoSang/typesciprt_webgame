import * as React from "react"
import { useState, useRef, useEffect, memo } from "react"
import { GameTitleDiv, BigTitle1 } from "../../components/style/game"
import "./RSP.css"

const rspCoords = {
  r: "0",
  s: "-142px",
  p: "-284px"
} as const

const scoreObj = {
  r: 1,
  s: 0,
  p: -1
} as const

type rsp = typeof rspCoords
type rsp_key = keyof rsp
type imgCoords = typeof rspCoords[keyof rsp]

const comChoice = (img: imgCoords) => {
  return (Object.keys(rspCoords) as [rsp_key]).find(arr => {
    return arr[1] === img
  })!
}

const RSP = () => {
  const [score, setScore] = useState(0)
  const [imgCoord, setImgCoord] = useState<imgCoords>(rspCoords.r)
  const [result, setResult] = useState()
  const intervalID = useRef<number>(0)
  const prev_intervalID = useRef<number>(0)
  const timeoutID = useRef<number>(0)

  useEffect(() => {
    intervalID.current = setInterval(changeRSC, 70)
    return () => {
      clearInterval(intervalID.current!)
    }
  }, [imgCoord])

  const changeRSC = () => {
    if (imgCoord === rspCoords.r) {
      setImgCoord(rspCoords.s)
    } else if (imgCoord === rspCoords.s) {
      setImgCoord(rspCoords.p)
    } else {
      setImgCoord(rspCoords.r)
    }
  }

  const onClickBtn = (choice: rsp_key) => () => {
    // 인자가 있으므로 고차함수로 줘야댐
    if (intervalID.current === prev_intervalID.current) return // 무한클릭 방지
    prev_intervalID.current = intervalID.current
    clearTimeout(timeoutID.current)
    clearInterval(intervalID.current)
    const myScore = scoreObj[choice]
    const comScore = scoreObj[comChoice(imgCoord)]
    const diff = myScore - comScore
    if (diff === 0) {
      setResult("비겼습니다.")
    } else if (diff === 1 || diff === -2) {
      setResult("이겼습니다!")
      setScore(prev => prev + 1)
    } else {
      setResult("졌습니다...")
      setScore(prev => prev - 1)
    }

    timeoutID.current = setTimeout(() => {
      intervalID.current = setInterval(changeRSC, 100)
    }, 2000)
  }

  return (
    <>
      <GameTitleDiv>
        <BigTitle1>가위바위보</BigTitle1>
      </GameTitleDiv>
      <div
        id="rsc-computer"
        style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}
      ></div>
      <div id="rsc-me">
        <button onClick={onClickBtn("r")}>바위</button>
        <button onClick={onClickBtn("s")}>가위</button>
        <button onClick={onClickBtn("p")}>보자기</button>
      </div>
      <div id="rsc-result">{result}</div>
      <div id="rsc-score">
        <label>내 점수는 </label>
        <span>{score}점</span>
      </div>
    </>
  )
}

export default memo(RSP)
