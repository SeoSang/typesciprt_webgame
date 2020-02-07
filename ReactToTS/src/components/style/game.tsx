import * as React from "react"
import styled from "styled-components"

export const GameTitleDiv = styled.div`
  background-color: #dff9fb;
  text-align: center;
  border-radius: 50px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
    0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  width: 60%;
  margin: 2.5em auto;
`
export const SmallTitle = styled(GameTitleDiv)`
  margin-top: 2%;
  display: inline-block;
  width: 20%;
  padding: 1% 0;
  font-size: 3vmin;
`

export const BigTitle1 = styled.h1`
  text-align: center;
  font-size: 7.5vmin;
  margin: 0;
`
