import React, { useState, useRef, useEffect, memo } from "react"
import "./RSP.css"

// constructor -> render -> ref -> DidMount
// (setState / Props 바뀜) -> shouldComponentUpdate render -> componentDidUpdate
// 부모가 나를 없앰 => componentWillUnmount -> 소멸

const rspCoords = {
  r: "0",
  s: "-142px",
  p: "-284px"
}

const scoreObj = {
  r: 1,
  s: 0,
  p: -1
}

const comChoice = img => {
  return Object.entries(rspCoords).find(arr => {
    return arr[1] === img
  })[0]
}

const RSP = () => {
  const [score, setScore] = useState(0)
  const [imgCoord, setImgCoord] = useState(rspCoords.r)
  const [result, setResult] = useState()
  const intervalID = useRef(0)
  const prev_intervalID = useRef()
  const timeoutID = useRef()

  //   // 첫 렌더 수행 후 (주로 비동기요청 실행)
  //   componentDidMount() {
  //     this.intervalID = setInterval(this.changeRSC, 70)
  //   }

  //   // 컴포넌트 리렌더링 된 후  (props가 바뀌거나 setstate 된 후)
  //   componentDidUpdate() {}

  //   // 컴포넌트 제거되기 직전 (비동기 요청 정리)
  //   componentWillUnmount() {}

  // useLayoutEffect()  -> 화면이 바뀌기 전에 화면이 바뀌었나 확인

  useEffect(() => {
    intervalID.current = setInterval(changeRSC, 70)
    return () => {
      clearInterval(intervalID.current)
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

  const onClickBtn = choice => () => {
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
      <div
        id="rsc-computer"
        style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}
      ></div>
      <div id="rsc-me">
        <button className="rsc__btn" onClick={onClickBtn("r")}>
          바위
        </button>
        <button className="rsc__btn" onClick={onClickBtn("s")}>
          가위
        </button>
        <button className="rsc__btn" onClick={onClickBtn("p")}>
          보자기
        </button>
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
