import React from "react"
import styled from "styled-components"

const ContentModel = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`

const ContentCover = styled.div`
  height: 280px;
  transiion: 0.2s;
  &:hover{
  transform: scale(120%);
  transition: 0.5s;
  }
`

const ContentTitle = styled.div`
  margin: 16px;
  text-align: center;
`

const ContentInfo = styled.div`
  color: #555;
  font-size: 12pt;
  text-align: center;
`

export default function Content(props){
  return <ContentModel>
    <ContentCover src={props.cover} alt="book cover"/>
    <ContentTitle>{props.title}</ContentTitle>

    <ContentInfo>{props.genre.join(", ")}</ContentInfo>
    <ContentInfo>{props.year}</ContentInfo>
    <ContentInfo>{props.writer}</ContentInfo>
    </ContentModel>
}