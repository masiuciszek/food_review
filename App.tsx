import React, {useState} from 'react'
import {FlatList, Platform, Text, Image} from 'react-native'
import image from './src/images/pizze.png'
import {
  Title,
  AppWrapper,
  SearchInput,
  ImageWrapper,
} from './src/components/styles/Common'
import RestaurantRow from './src/components/ResturantRow'

const App: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Array<RestaurantType>>([])
  const [search, setSearch] = useState<string>('')

  React.useEffect(() => {
    const getRestaurants = async () => {
      const res = await fetch('http://localhost:3000/restaurants')
      const data = await res.json()
      setRestaurants(data)
    }
    getRestaurants()
  }, [restaurants])

  const handleSearch = (text: string) => {
    setSearch(text)
    setRestaurants((prev) =>
      prev.filter(
        (s) =>
          s.address.toLowerCase().includes(text.toLowerCase()) ||
          s.name.toLowerCase().includes(text.toLowerCase()),
      ),
    )
  }

  return (
    <AppWrapper>
      <Title style={Platform.OS === 'ios' ? {color: '#1E88E5'} : {}}>
        Restaurant Review
      </Title>

      <ImageWrapper>
        <Image style={{width: 50, height: 50}} source={image} />
      </ImageWrapper>
      <SearchInput placeholder="..search" onChangeText={handleSearch} />

      <FlatList
        data={restaurants.filter(
          (r) =>
            !search || r.name.toLowerCase().indexOf(search.toLowerCase()) > -1,
        )}
        renderItem={({item, index}) => (
          <RestaurantRow item={item} index={index} />
        )}
        keyExtractor={(item) => item.name}
        initialNumToRender={12}
      />
    </AppWrapper>
  )
}

export default App
