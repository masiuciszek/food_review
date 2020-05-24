interface RestaurantType {
  id: number
  name: string
  address: string
  image: string
  rating: number
}

type RootStackParamList = {
  RestaurantList: undefined
  Restaurant: { item: RestaurantType }
  Review: { item: RestaurantType }
}

type TabStackParamList = {
  Main: RootStackParamList
  About: undefined
}
