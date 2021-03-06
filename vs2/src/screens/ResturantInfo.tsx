import * as React from 'react'
import styled from 'styled-components/native'
import { StackNavigationProp } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/FontAwesome'
import { RouteProp } from '@react-navigation/native'
import { Image } from 'react-native'

type RestaurantScreenRouteProp = RouteProp<RootStackParamList, 'Restaurant'>

type RestaurantScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Restaurant'>

interface Props {
  navigation: RestaurantScreenNavigationProp
  route: RestaurantScreenRouteProp
}

const StyledRestaurant = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background: #fff;
`

const Wrapper = styled.View`
  flex-direction: row;
`

const Text = styled.Text`
  font-size: 20px;
  text-align: center;
  padding: 16px;
`

const Content = styled.View`
  width: 100%;
  position: relative;
`
const Star = styled.View`
  flex-direction: row;
  padding: 10px;
  margin-right: auto;
`

const Btn = styled.TouchableOpacity`
  text-transform: capitalize;
  border: 2px solid #40c4ff;
  border-radius: 20px;
  padding: 0;
  position: absolute;
  right: 0;
  bottom: 0;
`

const RestaurantInfo: React.FC<Props> = ({ navigation, route }) => {
  const { image, name, rating, address, id } = route.params.item
  const restaurant = { image, name, rating, address, id }

  const formatRating = (rating: number) => {
    // const stars = Array.from(Array(rating).keys())
    const stars = [...Array(Math.ceil(rating))]

    return (
      <Star>
        {stars.map((_, i) => {
          const name = Math.floor(rating) > i ? 'star' : 'star-half'
          return <Icon key={i} name={name} size={30} color="#FDD835" />
        })}
      </Star>
    )
  }

  return (
    <StyledRestaurant>
      <Image style={{ width: 100, height: 100, margin: 20 }} source={{ uri: `http://localhost:3000/images/${image}` }} />
      <Content>
        <Text style={{ marginRight: 'auto' }}>Name: {name}</Text>
        <Text style={{ marginRight: 'auto' }}>Address:{address}</Text>
        {formatRating(rating)}
        <Btn onPress={() => navigation.navigate('Review', { item: restaurant })}>
          <Text style={{ fontSize: 15, padding: 0 }}>Leave A Review</Text>
        </Btn>
      </Content>
    </StyledRestaurant>
  )
}
export default RestaurantInfo
