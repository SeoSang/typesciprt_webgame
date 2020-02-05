import * as React from "react"
import styled from "styled-components"
import { SmallTitle } from "../../components/style/game"
import { Screen } from "../../../types"
const { useState, useRef } = React

const FastClickScreen = styled.div`
  margin: 5% 0;
  background: color;
  display: "inline-block";
  width: "60%";
  height: "40%";
`

const RANDOM_TIME = 2000
const WAIT_TIME = 2000
const WAITING: Screen = {
  color: "#7d5fff",
  state: "wating",
  text: "클릭해서 시작하세요."
}
const READY: Screen = {
  color: "#3ae374",
  state: "ready",
  text: "노랑색이 되면 바로 클릭하세요!"
}
const TOO_FAST: Screen = {
  color: "#ff3838",
  state: "tooFast",
  text: "너무 빨리 누르셨어요!!"
}
const CLICKTIME: Screen = {
  color: "#fff200",
  state: "clickTime",
  text: "클릭하세요!"
}
function FastClick() {
  const [color, setColor] = useState(WAITING.color)
  const [text, setText] = useState(WAITING.text)
  const [resultTime, setResultTime] = useState(0)
  const [state, setState] = useState(WAITING.state)
  const randomTime = WAIT_TIME + Math.ceil(Math.random() * RANDOM_TIME)
  const timeoutID = useRef<number | null>(null)
  const startTime = useRef<Date | undefined>()
  const endTime = useRef<Date | undefined>() // useRef 들은 변해도 렌더링이 안됨

  const setAllState = (nextScreen: Screen) => {
    setColor(nextScreen.color)
    setText(nextScreen.text)
    setState(nextScreen.state)
  }

  interface HandleScreenChangeInterface extends React.MouseEvent {
    target: HTMLDivElement
  }
  const handelClickedScreen = (e: HandleScreenChangeInterface) => {
    if (state === WAITING.state) {
      setAllState(READY)
      timeoutID.current = window.setTimeout(() => {
        setAllState(CLICKTIME)
        startTime.current = new Date()
        console.log({ startTime })
      }, randomTime)
    }

    if (state === READY.state) {
      clearTimeout(timeoutID.current!)
      setAllState(TOO_FAST)
      timeoutID.current = setTimeout(() => setAllState(WAITING), 3000)
    }
    if (state === CLICKTIME.state) {
      endTime.current = new Date()
      console.log({ endTime })
      setAllState(WAITING)
      if (endTime.current !== undefined && startTime.current !== undefined) {
        setResultTime(endTime.current.getTime() - startTime.current.getTime())
      } else {
        console.log("Time undefined")
        console.table(endTime.current, startTime.current)
      }
    }
    e.target.style.color = color
    e.target.children[0].textContent = text
    e.target.children[0].textContent
  }
  //   setTimeout(colorChange, msTime)

  return (
    <>
      <div>
        <SmallTitle>스피드 게임</SmallTitle>
      </div>
      <FastClickScreen onClick={handelClickedScreen} style={{}}>
        <h2 style={{ color: "#f5f6fa" }}>{text}</h2>
      </FastClickScreen>
      {resultTime === 0 ? null : (
        <div>
          <h3>
            반응속도 : {resultTime}ms = {resultTime / 1000}초
          </h3>
        </div>
      )}
    </>
  )
}

export default FastClick
