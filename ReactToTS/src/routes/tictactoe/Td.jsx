import React, { useCallback, memo } from "react"
import { CLICK_CELL } from "./TicTacToe.jsx"

const Td = ({ cellIndex, rowIndex, cellData, result, dispatch }) => {
  const onClickTd = useCallback(() => {
    console.log("useCallback")
    if (cellData || result) return
    dispatch({ type: CLICK_CELL, cell: cellIndex, row: rowIndex })
  }, [cellData, result])
  return <td onClick={onClickTd}>{cellData}</td>
}

export default memo(Td)
