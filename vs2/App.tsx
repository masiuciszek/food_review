/* eslint-disable react/display-name */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RestaurantList from './src/screens/RestaurantList'
import RestaurantInfo from './src/screens/ResturantInfo'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import About from './src/screens/About'
import Icon from 'react-native-vector-icons/FontAwesome'
import Review from './src/screens/Review'

const RootStack = createStackNavigator<RootStackParamList>()

const Tab = createBottomTabNavigator<TabStackParamList>()

function Navigation() {
  return (
    <RootStack.Navigator
      initialRouteName="RestaurantList"
      screenOptions={{
        headerStyle: { backgroundColor: '#1976D2' },
        headerTintColor: '#fff',
      }}
    >
      <RootStack.Screen name="RestaurantList" component={RestaurantList} options={{ headerTitle: 'Restaurant review' }} />
      <RootStack.Screen name="Restaurant" component={RestaurantInfo} />
      <RootStack.Screen name="Review" component={Review} />
    </RootStack.Navigator>
  )
}

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Main">
      <Tab.Screen
        name="Main"
        component={Navigation}
        options={(props) => {
          return {
            tabBarIcon: (props) => {
              return <Icon name="home" size={25} style={{ color: props.focused ? '#1976d2' : '#757575' }} />
            },
          }
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={(props) => {
          return {
            tabBarIcon: (props) => {
              return <Icon name="list" size={25} style={{ color: props.focused ? '#1976d2' : '#757575' }} />
            },
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}
