import * as React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { RouteProp } from '@react-navigation/native'
type ReviewScreenRouteProp = RouteProp<RootStackParamList, 'Review'>

interface Props {
  route: ReviewScreenRouteProp
}

const StyledReview = styled.View`
  flex: 1;
`

const FormWrapper = styled.View`
  flex: 1;
  border: 2px solid red;
  justify-content: center;
`

const Title = styled.Text`
  font-size: 20px;
  padding: 15px;
  text-align: center;
`

const Input = styled.TextInput`
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  margin: 20px 0;
`

const Review: React.FC<Props> = ({ route }) => {
  const { name } = route.params.item
  return (
    <StyledReview>
      <Title>Review for {name}</Title>
      <FormWrapper>
        <Input placeholder="Name" />
      </FormWrapper>
    </StyledReview>
  )
}
export default Review
