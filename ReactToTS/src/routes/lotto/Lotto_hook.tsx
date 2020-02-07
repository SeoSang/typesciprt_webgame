import * as React from "react"
import { useState, useRef, useEffect, useMemo } from "react"
import Ball from "./Ball"
import "./Lotto.css"

function getWinNumbers() {
  console.log("getWinNumbers")
  const BONUS_INDEX = 7
  const candidate = Array(45)
    .fill(null)
    .map((v, i) => i + 1)
  const shuffle = []
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0])
  }
  const bonusNum = shuffle[BONUS_INDEX]
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c)
  return [...winNumbers, bonusNum]
}

const Lotto = () => {
  const lottoNums = useMemo(() => getWinNumbers(), [])
  const [winNums, setWinNums] = useState(lottoNums)
  const [winBalls, setWinBalls] = useState<number[]>([])
  const [bonus, setBonus] = useState<number>(0)

  const timeoutIDs = useRef<number[]>([])
  const bonusTimeoutID = useRef<number>()

  const refresh = () => {
    setWinNums(getWinNumbers())
    setWinBalls([])
    setBonus(0)
    timeoutIDs.current.forEach(v => {
      clearTimeout(v)
    })
    clearTimeout(bonusTimeoutID.current)
  }

  const showBalls = () => {
    refresh()
    for (let i = 0; i < winNums.length - 1; i++) {
      timeoutIDs.current[i] = setTimeout(() => {
        setWinBalls(prev => {
          return [...prev, winNums[i]]
        })
      }, (i + 1) * 1000)
    }
    bonusTimeoutID.current = setTimeout(() => {
      setBonus(winNums[6])
    }, 7000)
  }

  useEffect(() => {
    showBalls()

    // 컴포넌트 없어질 때 지워주기 (ComponentWillUnmount)
    return () => {
      timeoutIDs.current.forEach(v => {
        clearTimeout(v)
      })
      clearTimeout(bonusTimeoutID.current)
    }
  }, [])

  return (
    <>
      <div>
        <div className="gameTitle lotto-title">로또번호</div>
      </div>
      <div className="lotto-ballContainer">
        {winBalls.map((nums, i) => (
          <Ball key={`${i}번째 공`} ballNum={nums}></Ball>
        ))}
      </div>
      <div>
        <div className="gameTitle lotto-title">보너스번호</div>
      </div>
      <div className="lotto-ballContainer">
        {bonus == null ? null : <Ball key="bonus 공" ballNum={bonus}></Ball>}
      </div>
      <button className="gameButton" onClick={showBalls}>
        다시뽑기
      </button>
    </>
  )
}

export default Lotto
