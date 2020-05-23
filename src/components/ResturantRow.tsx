/* eslint-disable react/prop-types */
import * as React from 'react'
import styled from 'styled-components/native'
import {SimpleText} from '../components/styles/Common'

import Icon from 'react-native-vector-icons/FontAwesome'
import Stars from './Stars'

type RestaurantProp = {
  index: number
}

interface Props {
  item: RestaurantType
  index: number
}

interface RowTextProps {
  stars?: boolean
}

const StyledRestaurantRow = styled.View<RestaurantProp>`
  padding: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.index % 2 === 0 ? '#ccc' : '#ceccde')};
  margin: 10px 0;
`
const StyledRestaurantRowText = styled.Text<RowTextProps>`
  padding: 16px;
  flex: 1;
  text-align: center;
  text-align: left;
  flex-direction: ${(props) => (props.stars ? 'row' : 'column')};
`
const StyledRestaurantRowBtn = styled.TouchableOpacity`
  min-width: 70px;
  border: 2px solid #42a5f5;
  border-radius: 13px;
`

const RestaurantRow: React.FC<Props> = ({item, index}) => {
  return (
    <StyledRestaurantRow index={index}>
      <Stars rating={item.rating} />
      <StyledRestaurantRowText>
        {item.name} {item.address}
      </StyledRestaurantRowText>

      <StyledRestaurantRowBtn>
        <SimpleText>info</SimpleText>
      </StyledRestaurantRowBtn>
    </StyledRestaurantRow>
  )
}
export default RestaurantRow
