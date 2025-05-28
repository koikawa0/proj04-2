import React from "react"
import styled from "styled-components"

const TitleModel = styled.div`
  background-image: url(${props => props.image})
  background-position: center;
  background-size: cover;
  padding: 32px;
`
const TitleName = styled.div`
color: #666;
font-size: 32pt;
margin-top: 160px;
text-align: center;
`

export default function Title(props) {
  return <TitleModel image={props.image}>
    <TitleName>{props.name}</TitleName>
  </TitleModel>
}