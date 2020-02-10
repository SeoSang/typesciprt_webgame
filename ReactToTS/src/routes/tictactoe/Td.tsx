import * as React from "react"
import { useCallback, memo, useRef, useEffect } from "react"
import { CLICK_CELL, clickCell } from "./TicTacToe"
import { UseReducerState } from "./TicTacToe"

interface Props {
  cellIndex: number
  rowIndex: number
  cellData: string
  result: UseReducerState["result"]
  dispatch: React.Dispatch<any>
  children: string
  isPlaying: boolean
}

const Td: React.FC<Props> = ({ cellIndex, rowIndex, cellData, result, dispatch, isPlaying }) => {
  console.log("TCL: onClickTd -> result", result)

  const ref = useRef<[number?, number?, React.Dispatch<any>?, string?]>([])
  useEffect(() => {
    console.log(
      rowIndex === ref.current[0],
      cellIndex === ref.current[1],
      dispatch === ref.current[2],
      cellData === ref.current[3],
    )
    console.log(cellData, ref.current[3])
    ref.current = [rowIndex, cellIndex, dispatch, cellData]
  }, [rowIndex, cellIndex, dispatch, cellData])

  const onClickTd = useCallback(() => {
    console.log("TCL: onClickTd -> isPlaying", isPlaying)
    if (cellData || result) return
    dispatch(clickCell(rowIndex, cellIndex))
  }, [cellData, result])
  return <td onClick={onClickTd}>{cellData}</td>
}

export default memo(Td)
