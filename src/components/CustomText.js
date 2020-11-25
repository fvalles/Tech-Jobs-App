import React from 'react'
import styled from 'styled-components'

export default function CustomText({ children }) {
    return (
        <StyledText>
            {children}
        </StyledText>
    )
}

const StyledText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`
