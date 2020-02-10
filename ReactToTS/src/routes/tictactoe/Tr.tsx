import * as React from "react"
import { memo } from "react"
import Td from "./Td"
import { UseReducerState } from "./TicTacToe"

interface Props {
  rowData: string[]
  rowIndex: number
  result: UseReducerState["result"]
  dispatch: React.Dispatch<any>
  isPlaying: boolean
}

const Tr: React.FC<Props> = ({ rowData, rowIndex, result, dispatch, isPlaying }) => {
  // useEffect (() => {}[a,b,c])
  // 이거할 때 useRef 로 저거 a,b,c, 타입해줘야댐
  return (
    <tr>
      {Array(rowData.length)
        .fill("")
        .map((tr, i) =>
          React.useMemo(
            () => (
              <Td
                key={`${rowIndex} 번째 열 ${i}번째 행`}
                cellIndex={i}
                rowIndex={rowIndex}
                cellData={rowData[i]}
                result={result}
                dispatch={dispatch}
                isPlaying={isPlaying}
              >
                {rowData[i]}
              </Td>
            ),
            [rowData],
          ),
        )}
    </tr>
  )
}

export default memo(Tr)
