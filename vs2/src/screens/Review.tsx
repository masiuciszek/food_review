import * as React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styled from 'styled-components/native'
import { RouteProp } from '@react-navigation/native'
import { Text, NativeTouchEvent, NativeSyntheticEvent } from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

type ReviewScreenRouteProp = RouteProp<RootStackParamList, 'Review'>

interface Props {
  route: ReviewScreenRouteProp
}

const Title = styled.Text`
  font-size: 30px;
  padding: 15px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 60px;
`

const Input = styled.TextInput`
  background: #fff;
  color: #444;
  padding: 10px;
  border: 2px solid rgba(0, 0, 0, 0.6);
  margin: 20px 10px;
  border-radius: 12px;
`

const RatingText = styled.Text`
  font-size: 25px;
  padding: 15px 0;
  color: #ccc;
  text-align: center;
  margin: 25px 0;
  text-transform: capitalize;
`

const Stars = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 30px 0;
`

const BtnSubmit = styled.TouchableOpacity`
  margin: 10px auto;
  border: 2px solid #40c4ff;
  padding: 5px 8px;
  width: 120px;
  border-radius: 20px;
`

const Review: React.FC<Props> = ({ route }) => {
  const { name: restaurantName } = route.params.item
  const { useState } = React

  const [name, setName] = useState<string>('')
  const [rating, setRating] = useState<number>(0)
  const [comment, setComment] = useState<string>('')

  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Title>Review for {restaurantName}</Title>

      <Input placeholder="Name '(Optional)'" value={name} onChangeText={(name) => setName(name)} />
      <RatingText>Your rating</RatingText>
      <Stars>
        {[1, 2, 3, 4, 5].map((_, i) => {
          return (
            <TouchableOpacity key={i} onPress={() => setRating(i)}>
              <Icon name="star" size={40} color={rating >= i ? '#ffd64c' : '#ccc'} />
            </TouchableOpacity>
          )
        })}
      </Stars>
      <Input placeholder="...Review" multiline={true} numberOfLines={5} style={{ height: 100 }} value={comment} onChangeText={(comment) => setComment(comment)} />

      <BtnSubmit>
        <Text style={{ textAlign: 'center' }}>Submit</Text>
      </BtnSubmit>
    </KeyboardAwareScrollView>
  )
}
export default Review
