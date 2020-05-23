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

const Content = styled.View``
const Star = styled.View`
  flex-direction: row;
  padding: 10px;
  margin-right: auto;
`

const Btn = styled.TouchableOpacity`
  margin-right: auto;
  text-transform: capitalize;
  border: 2px solid #40c4ff;
  border-radius: 12px;
  margin-top: 25px;
`

const RestaurantInfo: React.FC<Props> = ({ navigation, route }) => {
  const { image, name, rating, address } = route.params.item

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
      <Text style={{ fontSize: 30 }}>Restaurant Info</Text>
      <Wrapper>
        <Image style={{ width: 100, height: 100, margin: 20 }} source={{ uri: `http://localhost:3000/images/${image}` }} />
        <Content>
          <Text>Name: {name}</Text>
          <Text>Address:{address}</Text>

          {formatRating(rating)}
        </Content>
      </Wrapper>
      <Btn onPress={() => navigation.navigate('Review')}>
        <Text>Leave A Review</Text>
      </Btn>
    </StyledRestaurant>
  )
}
export default RestaurantInfo
