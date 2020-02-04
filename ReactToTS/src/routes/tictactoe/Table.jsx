import React, { memo } from "react"
import Tr from "./Tr.jsx"

const Table = ({ onClick, tableData, result, dispatch }) => {
  return (
    <table onClick={onClick}>
      {Array(tableData.length)
        .fill(0)
        .map((tr, i) => (
          <Tr
            key={`${i}번째 열`}
            tableData={tableData}
            rowIndex={i}
            rowData={tableData[i]}
            result={result}
            dispatch={dispatch}
          />
        ))}
    </table>
  )
}

export default memo(Table)
