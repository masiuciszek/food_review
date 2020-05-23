import * as React from 'react'
import styled from 'styled-components/native'
import AppLogo from '../images/pizza.png'
import { Image } from 'react-native'
import RestaurantRow from '../components/RestaurantRow'
import { FlatList } from 'react-native-gesture-handler'
import SearchBar from '../components/SearchBar'
import { StackNavigationProp } from '@react-navigation/stack'

type RestaurantScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RestaurantList'>

interface Props {
  navigation: RestaurantScreenNavigationProp
}

const StyledList = styled.View`
  background: #fff;
  flex: 1;
`

const TitleWrapper = styled.View`
  margin: 15px 0;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  background: #fff;
`
const Title = styled.Text`
  padding: 10px 0;
  font-size: 25px;
  text-transform: capitalize;
  color: #40c4ff;
`

const RestaurantList: React.FC<Props> = ({ navigation }) => {
  const [text, setText] = React.useState<string>('')
  const [restaurantData, setRestaurantData] = React.useState<RestaurantType[]>([])
  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:3000/restaurants')
      const data = await res.json()
      setRestaurantData(data)
    }
    getData()
  }, [])

  return (
    <StyledList>
      <TitleWrapper>
        <Image source={AppLogo} />
        <Title>Restsurant list</Title>
      </TitleWrapper>
      <SearchBar text={text} onSetText={setText} />
      <FlatList
        data={restaurantData.filter((p) => {
          return !text || p.name.toLowerCase().indexOf(text.toLowerCase()) > -1
        })}
        renderItem={({ item, index }) => <RestaurantRow navigation={navigation} item={item} index={index} />}
        keyExtractor={(item, index) => item.name}
      />
    </StyledList>
  )
}
export default RestaurantList
