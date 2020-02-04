import React, { memo } from "react"
import Td from "./Td.jsx"

const Tr = ({ tableData, rowData, rowIndex, result, dispatch }) => {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((tr, i) => {
          return (
            <Td
              key={`${rowIndex} 번째 열 ${i}번째 행`}
              tableData={tableData}
              rowIndex={rowIndex}
              cellIndex={i}
              cellData={rowData[i]}
              result={result}
              dispatch={dispatch}
            >
              {rowData[i]}
            </Td>
          )
        })}
    </tr>
  )
}

export default memo(Tr)
