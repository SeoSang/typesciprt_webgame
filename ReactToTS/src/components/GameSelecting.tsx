import * as React from "react"
import { Component } from "react"
import WordRelay from "../routes/wordRelay/WordRelay"
import NumberBaseball from "../routes/numberBaseball/NumberBaseball"
import FastClick from "../routes/fastClick/FastClick"
import RSP from "../routes/rsp/RSP"
import Lotto from "../routes/lotto/Lotto_hook"
import TicTacToe from "../routes/tictactoe/TicTacToe"
import Gugudan from "../routes/gugudan/Gugudan"
import Home from "../../Home"
import { RouteComponentProps } from "react-router"

interface Props extends RouteComponentProps {}

const GameSelecting: React.FC<RouteComponentProps<{ name: string }>> = ({ match }) => {
  switch (match.params.name) {
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

export default GameSelecting
