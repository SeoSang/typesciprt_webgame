import * as React from "react"
import { Component, memo } from "react"

const Ball: React.FunctionComponent<{ ballNum: number }> = ({ ballNum }) => {
  const styles = {
    borderRadius: "10000px",
    margin: "0 2%",
    padding: "1%",
    display: "inline-block",
    width: "50px",
    height: "50px",
    background: "radial-gradient(circle at 17px 17px, #eb4d4b, rgb(255, 252, 252))"
  }

  // 보너스번호 안나오게
  if (ballNum === 0) {
    return null
  }

  if (ballNum < 10) {
    styles.background = "radial-gradient(circle at 17px 17px, #ff4757, #772530)"
  } else if (ballNum < 20) {
    styles.background = "radial-gradient(circle at 17px 17px, #ffa502, #772530)"
  } else if (ballNum < 30) {
    styles.background = "radial-gradient(circle at 17px 17px, #fffa65, #7c7c30)"
  } else if (ballNum < 40) {
    styles.background = "radial-gradient(circle at 17px 17px, #1e90ff, #2f3542)"
  } else {
    styles.background = "radial-gradient(circle at 17px 17px, #7bed9f, #2f3542)"
  }
  return <div style={styles}>{ballNum}</div>
}

export default memo(Ball)
