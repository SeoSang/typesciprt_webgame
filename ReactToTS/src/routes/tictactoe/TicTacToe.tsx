import * as React from "react"
import { Fragment, useReducer, useCallback, useEffect } from "react"
import Table from "./Table"
import "./TicTacToe.css"

export interface UseReducerState {
  result: "O님의 승리!" | "X님의 승리!" | "무승부!" | ""
  turn: "O" | "X" | ""
  tableData: string[][]
  recentCell: [number, number]
}

interface SetResultAction {
  type: typeof SET_RESULT
  result: UseReducerState["result"]
}

interface ClickCellAction {
  type: typeof CLICK_CELL
  row: number
  cell: number
}
interface ChangeTurnAction {
  type: typeof CHANGE_TURN
}
interface ResetGameAction {
  type: typeof RESET_GAME
}

const initialState: UseReducerState = {
  result: "",
  turn: "O",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  recentCell: [-1, -1],
}

export const SET_RESULT = "SET_RESULT" as const
export const CLICK_CELL = "CLICK_CELL" as const
export const CHANGE_TURN = "CHANGE_TURN" as const
export const RESET_GAME = "RESET_GAME" as const

export const setResult = (
  result: "O님의 승리!" | "X님의 승리!" | "무승부!" | "",
): SetResultAction => {
  return { type: SET_RESULT, result }
}

export const clickCell = (row: number, cell: number): ClickCellAction => {
  return { type: CLICK_CELL, row, cell }
}

type ReducerAction = SetResultAction | ClickCellAction | ChangeTurnAction | ResetGameAction
const reducer = (state: UseReducerState, action: ReducerAction): UseReducerState => {
  switch (action.type) {
    case SET_RESULT:
      return {
        ...state,
        result: action.result,
      }
    case CLICK_CELL: {
      const tableData = [...state.tableData]
      tableData[action.row] = [...tableData[action.row]] // immer 로 가독성 해결
      tableData[action.row][action.cell] = state.turn
      return {
        ...state,
        tableData: tableData,
        recentCell: [action.row, action.cell],
      }
    }
    case CHANGE_TURN: {
      let nextTurn: UseReducerState["turn"] = ""
      if (state.turn === "O") nextTurn = "X"
      else nextTurn = "O"
      return {
        ...state,
        turn: nextTurn,
      }
    }
    case RESET_GAME: {
      return {
        ...state,
        result: "",
        turn: "O",
        tableData: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        recentCell: [-1, -1],
      }
    }
    default: {
      return state
    }
  }
}

function TicTacToe() {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [state, dispatch] = useReducer(reducer, initialState)
  const { recentCell, tableData, result, turn } = state

  const resetGame = useCallback(() => {
    dispatch({ type: RESET_GAME })
    setIsPlaying(true)
  }, [isPlaying])

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
      dispatch(setResult(`${turn}님의 승리!` as UseReducerState["result"]))
      setIsPlaying(false)
      console.log("TICTACTOE 에서 ISPlaying", isPlaying)
    } else {
      setIsPlaying(false)
      tableData.forEach(row => {
        row.forEach(cell => {
          if (!cell) {
            setIsPlaying(true)
          }
        })
      })
      if (!isPlaying) {
        // 비겼을 때
        dispatch({ type: SET_RESULT, result: "무승부!" })
        setIsPlaying(false)
      } else {
        // 계속 진행
        dispatch({ type: CHANGE_TURN })
      }
    }
  }, [recentCell, isPlaying])

  const onClickTable = useCallback(() => {}, [])

  return (
    <>
      <Table
        onClick={onClickTable}
        tableData={tableData}
        dispatch={dispatch}
        result={result}
        isPlaying={isPlaying}
      ></Table>
      {!isPlaying && (
        <div>
          <div>{result}</div>
          <button onClick={resetGame}>게임 다시하기</button>
        </div>
      )}
    </>
  )
}

export default TicTacToe
