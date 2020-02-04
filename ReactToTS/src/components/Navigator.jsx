import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import "./Navigator.css"

const gameArr = [
  { title: "구구단", link: "/game/gugudan" },
  { title: "끝말잇기", link: "/game/wordrelay" },
  { title: "숫자야구", link: "/game/numberbaseball" },
  { title: "스피드 게임", link: "/game/fastclick" },
  { title: "가위바위보", link: "/game/rsp" },
  { title: "로또추첨기", link: "/game/lotto" },
  { title: "틱택토", link: "/game/tictactoe" }
]

export default function Navigator() {
  return (
    <>
      <Link to="/home" className="btn-home">
        홈으로 가기
      </Link>
      <ul className="navigator_ul">
        {gameArr.map(game => {
          return (
            <Link to={game.link} key={game.title}>
              <li>{game.title}</li>
            </Link>
          )
        })}
      </ul>
    </>
  )
}
