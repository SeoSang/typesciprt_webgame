import * as React from "react"
import { memo, useMemo } from "react"
import Tr from "./Tr"
import { UseReducerState } from "./TicTacToe"

interface Props {
  onClick: () => void
  tableData: string[][]
  result: UseReducerState["result"]
  dispatch: React.Dispatch<any>
  isPlaying: boolean
}

const Table: React.FC<Props> = ({ isPlaying, onClick, tableData, result, dispatch }) => {
  return (
    <table onClick={onClick}>
      {Array(tableData.length)
        .fill(0)
        .map((tr, i) =>
          useMemo(
            () => (
              <Tr
                key={`${i}번째 열`}
                rowIndex={i}
                rowData={tableData[i]}
                result={result}
                dispatch={dispatch}
                isPlaying={isPlaying}
              />
            ),
            tableData[i],
          ),
        )}
    </table>
  )
}

export default memo(Table)
