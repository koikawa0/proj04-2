import React from "react"
import styled from "styled-components"

const FieldModel = styled.div`
  background: white;
  padding: 32px;
  margin: 32px 0;
`

const InnerField = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`

export default function Field(props) {
  return <FieldModel>
    <InnerField>
      {props.children}
    </InnerField>
    </FieldModel>
}