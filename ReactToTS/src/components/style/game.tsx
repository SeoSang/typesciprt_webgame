import * as React from "react"
import styled from "styled-components"

export const GameTitle = styled.div`
  background-color: #dff9fb;
  text-align: middle;
  border-radius: 50px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
    0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`
export const SmallTitle = styled(GameTitle)`
  margin-top: 2%;
  display: inline-block;
  width: 20%;
  padding: 1% 0;
  font-size: 3vmin;
`
