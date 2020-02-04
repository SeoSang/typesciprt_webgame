import React, { Component } from "react"
import Ball from "./Ball.jsx"
import "./Lotto.css"

function getWinNumbers() {
  console.log("getWinNumbers")
  const BONUS_INDEX = 7
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1)
  const shuffle = []
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0])
  }
  const bonusNum = shuffle[BONUS_INDEX]
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c)
  return [...winNumbers, bonusNum]
}

class Lotto extends Component {
  state = {
    winNums: getWinNumbers(),
    winBalls: [],
    bonus: null
  }

  timeoutIDs = []
  bonusTimeoutID

  refresh = () => {
    this.setState({
      winNums: getWinNumbers(),
      winBalls: [],
      bonus: null
    })
    this.timeoutIDs.forEach(v => {
      clearTimeout(v)
    })
    clearTimeout(this.bonusTimeoutID)
  }

  showBalls = () => {
    this.refresh()
    const { winNums } = this.state
    for (let i = 0; i < winNums.length - 1; i++) {
      this.timeoutIDs[i] = setTimeout(() => {
        this.setState(prev => {
          return {
            winBalls: [...prev.winBalls, prev.winNums[i]]
          }
        })
      }, (i + 1) * 1000)
    }
    this.bonusTimeoutID = setTimeout(() => {
      this.setState(prev => {
        return {
          bonus: prev.winNums[6]
        }
      })
    }, 7000)
  }
  componentDidMount() {
    this.showBalls()
  }

  componentWillUnmount() {
    this.timeoutIDs.forEach(v => {
      clearTimeout(v)
    })
    clearTimeout(this.bonusTimeoutID)
  }

  render() {
    const { winNums, winBalls, bonus } = this.state
    return (
      <>
        <div>
          <div className="gameTitle lotto-title">로또번호</div>
        </div>
        <div className="lotto-ballContainer">
          {winBalls.map((nums, i) => (
            <Ball key={`${i}번째 공`} number={nums}></Ball>
          ))}
        </div>
        <div>
          <div className="gameTitle lotto-title">보너스번호</div>
        </div>
        <div className="lotto-ballContainer">
          {bonus == null ? null : <Ball key="bonus 공" number={bonus}></Ball>}
        </div>
        <button className="gameButton" onClick={this.showBalls}>
          다시뽑기
        </button>
      </>
    )
  }
}

export default Lotto
