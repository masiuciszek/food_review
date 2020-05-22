import React from 'react'
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

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Title>Restaurant Review</Title>
      <Restaurants>
        <FlatList
          data={restaurants}
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
