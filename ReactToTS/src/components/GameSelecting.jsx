import React, { Component } from "react"
import WordRelay from "../routes/wordRelay/WordRelay"
import NumberBaseball from "../routes/numberBaseball/NumberBaseball"
import FastClick from "../routes/fastClick/FastClick"
import RSP from "../routes/rsp/RSP_hook.tsx"
import Lotto from "../routes/lotto/Lotto_hook.tsx"
import TicTacToe from "../routes/tictactoe/TicTacToe"
import Gugudan from "../routes/gugudan/Gugudan"
import Home from "../../Home"

class GameSelecting extends Component {
  render() {
    switch (this.props.match.params.name) {
      case "numberbaseball":
        return <NumberBaseball />

      case "fastclick":
        return <FastClick />
      case "rsp":
        return <RSP />
      case "lotto":
        return <Lotto />
      case "tictactoe":
        return <TicTacToe />
      case "gugudan":
        return <Gugudan />
      case "wordrelay":
        return <WordRelay />
      default:
        return <Home />
    }
  }
}

export default GameSelecting
