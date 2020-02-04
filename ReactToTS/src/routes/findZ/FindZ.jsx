import React, { useReducer, createContext, useMemo } from "react"
import Form from "./Form.jsx"
import Table from "./Table.jsx"

export const TableContext = createContext({
  tableData: [],
  dispatch: () => {} // 초기값들
})

export const Z = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6
}

const initialState = {
  tableData: [
    [Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL],
    [Z.MINE, Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL],
    [Z.NORMAL, Z.MINE, Z.NORMAL, Z.MINE, Z.MINE, Z.NORMAL, Z.NORMAL],
    [Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL],
    [Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL],
    [Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL],
    [Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL, Z.NORMAL]
  ],
  timer: 0,
  result: ""
}

const plantMine = (row, cell, mine) => {
  console.log(row, cell, mine)
  const candidate = Array(row * cell)
    .fill()
    .map((arr, i) => {
      return i
    })
  const shuffle = []
  while (candidate.legnth > row * cell - mine) {
    const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    shuffle.push(chosen)
  }
  const data = []
  for (let i = 0; i < row; i++) {
    const rowData = []
    data.push(rowData)
    for (let j = 0; j < cell; j++) {
      rowData.push(Z.NORMAL)
    }
  }

  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / cell)
    const hor = shuffle[k] % cell
    data[ver][hor] = CODE.MINE
  }
  return data
}

export const START_GAME = "START_GAME"

const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        tableData: plantMine(action.row, action.cell, action.mine)
      }
    default:
      return state
  }
}

const FindZ = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useMemo(
    () => ({
      tableData: state.tableData,
      dispatch: dispatch
    }),
    [state.tableData]
  )
  return (
    <TableContext.Provider value={value}>
      <Form />
      <div>state.timer</div>
      <Table />
      <div>state.result</div>
    </TableContext.Provider>
  )
}

export default FindZ
