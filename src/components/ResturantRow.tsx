/* eslint-disable react/prop-types */
import * as React from 'react'
import styled from 'styled-components/native'
import {SimpleText} from '../components/styles/Common'
type RestaurantProp = {
  index: number
}

interface Props {
  item: RestaurantType
  index: number
}

const StyledRestaurantRow = styled.View<RestaurantProp>`
  padding: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.index % 2 === 0 ? '#ccc' : '#ceccde')};
  margin: 10px 0;
`
const StyledRestaurantRowText = styled.Text`
  padding: 12px;
  flex: 1;
  text-align: center;
`
const StyledRestaurantRowBtn = styled.TouchableOpacity`
  min-width: 50px;
  /* padding: 5px; */
  border: 2px solid #42a5f5;
  border-radius: 13px;
`

const RestaurantRow: React.FC<Props> = ({item, index}) => {
  return (
    <StyledRestaurantRow index={index}>
      <StyledRestaurantRowText>
        {index + 1} {item.name}
      </StyledRestaurantRowText>
      <StyledRestaurantRowText>{item.address}</StyledRestaurantRowText>
      <StyledRestaurantRowBtn>
        <SimpleText>info</SimpleText>
      </StyledRestaurantRowBtn>
    </StyledRestaurantRow>
  )
}
export default RestaurantRow
