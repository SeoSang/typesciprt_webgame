import * as React from "react"
import styled from "styled-components"

interface Styled {
  div: HTMLDivElement
}

const MyFooter = styled.div`
  position: absolute;
  bottom: 3%;
  width: 50%;
  left: 25%;
`

export default function Footer() {
  return (
    <MyFooter className="homeFooter">
      <p>made by seo</p>
    </MyFooter>
  )
}
