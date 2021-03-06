import * as React from 'react'
import styled from 'styled-components/native'

interface Props {
  text: string
}

const HeaderWrapper = styled.View``
const HeaderText = styled.Text``
const HeaderIos: React.FC<Props> = ({text}) => {
  return (
    <HeaderWrapper>
      <HeaderText>{text}</HeaderText>
    </HeaderWrapper>
  )
}
export default HeaderIos
