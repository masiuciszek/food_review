import * as React from 'react'
import styled from 'styled-components/native'

import Stars from './Stars'
import { StackNavigationProp } from '@react-navigation/stack'
type RestaurantScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RestaurantList'>

interface Props {
  item: RestaurantType
  index: number
  navigation: RestaurantScreenNavigationProp
}

interface StyledProps {
  index: number
}
interface ColProps {
  cta?: boolean
}

const RestaurantStyled = styled.View<StyledProps>`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  box-shadow: 1px 2px #ccc;
  background: ${(props) => (props.index % 2 === 0 ? '#40C4FF' : '#0277BD')};
`

const Col = styled.TouchableOpacity<ColProps>`

  padding: 5px 12px;
  flex: 1;
  /* border: 2px solid red; */
  /* border: ${(props) => (props.cta ? 'red' : '')} 2px solid; */
`

const Text = styled.Text`
  color: #fff;
  font-size: 15px;
  text-align: center;
  font-weight: 700;
  margin: 5px 0;
`

const RestaurantRow: React.FC<Props> = ({ item, index, navigation }) => {
  return (
    <RestaurantStyled index={index}>
      <Stars rating={item.rating} />
      <Col>
        <Text>{item.name}</Text>
        <Text style={{ color: '#ccc' }}>{item.address}</Text>
      </Col>
      <Col cta style={{ borderWidth: 2, borderRadius: 8, maxWidth: 60, borderColor: '#fff' }} onPress={() => navigation.navigate('Restaurant', { item })}>
        <Text style={{ textAlign: 'center' }}>Info</Text>
      </Col>
    </RestaurantStyled>
  )
}
export default RestaurantRow
