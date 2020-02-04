import React, { memo } from "react"

const Try = ({ tryInfo }) => {
  return (
    <>
      <li>
        {tryInfo.try} => {tryInfo.result}
      </li>
    </>
  )
}

export default memo(Try)
