import * as React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {View} from 'react-native'
interface Props {
  rating: number
}

const Stars: React.FC<Props> = ({rating}) => {
  const stars = [...Array(Math.ceil(rating))]
  return (
    <View style={{flexDirection: 'row', padding: 20}}>
      {stars.map((_, i) => {
        const name = Math.floor(rating) > i ? 'star' : 'star-half'
        return <Icon key={i} name={name} color="#ffd64c" />
      })}
    </View>
  )
}
export default Stars
