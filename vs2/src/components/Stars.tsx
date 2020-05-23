import * as React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

interface Props {
  rating: number
}

const Stars: React.FC<Props> = ({ rating }) => {
  const stars = [...Array(Math.ceil(rating))]

  return (
    <View style={{ flexDirection: 'row', maxWidth: 90 }}>
      {stars.map((_, i) => {
        const name = Math.floor(rating) > i ? 'star' : 'star-half'
        return <Icon key={i} name={name} color="#FDD835" />
      })}
    </View>
  )
}
export default Stars
