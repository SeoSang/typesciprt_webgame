import React, { Fragment, useReducer, useCallback, useEffect } from "react"
import Table from "./Table.jsx"
import "./TicTacToe.css"

const initialState = {
  result: "",
  turn: "O",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ],
  recentCell: [-1, -1]
}

export const SET_RESULT = "SET_RESULT"
export const CLICK_CELL = "CLICK_CELL"
export const CHANGE_TURN = "CHANGE_TURN"

const reducer = (state, action) => {
  switch (action.type) {
    case SET_RESULT:
      return {
        ...state,
        result: action.result
      }
    case CLICK_CELL: {
      const tableData = [...state.tableData]
      tableData[action.row] = [...tableData[action.row]] // immer 로 가독성 해결
      tableData[action.row][action.cell] = state.turn
      return {
        ...state,
        tableData: tableData,
        recentCell: [action.row, action.cell]
      }
    }
    case CHANGE_TURN: {
      let nextTurn = ""
      if (state.turn === "O") nextTurn = "X"
      else nextTurn = "O"
      return {
        ...state,
        turn: nextTurn
      }
    }
  }
}

function TicTacToe() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { recentCell, tableData, result, turn } = state

  useEffect(() => {
    const [row, cell] = recentCell
    if (row < 0) return
    let win = false
    if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
      win = true
    }
    if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
      win = true
    }
    if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
      win = true
    }
    if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
      win = true
    }
    if (win) {
      // 이겼을 때
      dispatch({ type: SET_RESULT, result: `${turn}님의 승리!` })
      console.log(state.result)
      console.log(state.tableData)
    } else {
      let playing = false
      tableData.forEach(row => {
        row.forEach(cell => {
          if (!cell) playing = true
        })
      })
      if (!playing) {
        // 비겼을 때
        dispatch({ type: SET_RESULT, result: "무승부!" })
      } else {
        // 계속 진행
        dispatch({ type: CHANGE_TURN })
      }
    }
  }, [recentCell])

  return (
    <>
      <Table tableData={state.tableData} dispatch={dispatch} result={state.result}></Table>
      {state.result && <div>{state.result}</div>}
    </>
  )
}

export default TicTacToe
