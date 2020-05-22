import React, {useState} from 'react'
import {FlatList, Animated} from 'react-native'
import styled from 'styled-components/native'

type RestaurantType = {
  index: number
}
const restaurants = [
  {name: 'React Cafe', address: '123 Anywhere St'},
  {name: 'Fancy Restaurant', address: '799 Main St'},
  {name: 'Taco Place', address: '550 Maple Rd'},
]

const AppWrapper = styled.View`
  flex: 1;
  justify-content: center;
`

const Title = styled.Text`
  margin-top: 60px;
  text-align: center;
  color: #fe9921;
  font-size: 30px;
  position: absolute;
  top: 15px;
  left: 90px;
`

const Restaurants = styled.View`
  padding: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Restaurant = styled.View<RestaurantType>`
  padding: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.index % 2 === 0 ? '#ccc' : '#fff')};
`

const RestaurantText = styled.Text`
  margin: 5px;
  padding: 5px;
  font-size: 16px;
  flex: 1;
`

const SearchInput = styled.TextInput`
  font-size: 18px;
  width: 80%;
  background: #e0e0e0;
  border: #ddd 2px solid;
  margin: 10px auto;
  padding: 10px;
  box-shadow: 3px 5px rgba(0, 0, 0, 0.2);
`

const App: React.FC = () => {
  const [data, setData] = useState(restaurants)
  const [search, setSearch] = useState<string>('')

  React.useEffect(() => {
    if (search.length === 0) {
      setSearch('')
      setData(restaurants)
    }
  }, [data])

  const handleSearch = (text: string) => {
    setSearch(text)
    setData((prev) =>
      prev.filter(
        (s) =>
          s.address.toLowerCase().includes(text.toLowerCase()) ||
          s.name.toLowerCase().includes(text.toLowerCase()),
      ),
    )
  }

  return (
    <AppWrapper>
      <Title>Restaurant Review</Title>
      <SearchInput
        placeholder="..search"
        // onChangeText={(text) => setSearch(text)}
        onChangeText={handleSearch}
      />
      <Restaurants>
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <>
              <Restaurant index={index}>
                <RestaurantText>
                  {' '}
                  {index + 1} {item.name}{' '}
                </RestaurantText>

                <RestaurantText> {item.address} </RestaurantText>
              </Restaurant>
            </>
          )}
          keyExtractor={(item) => item.name}
        />
      </Restaurants>
    </AppWrapper>
  )
}

export default App
