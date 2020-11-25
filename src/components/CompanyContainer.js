import React from 'react'
import styled from 'styled-components'

export default function CompanyContainer({ onPress, children }) {
    return (
        <RowContainer onPress={onPress}>
            {children}
        </RowContainer>
    )
}

const RowContainer = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  height: 100px;
  padding-left: 30px;
  width: 100%;
`
