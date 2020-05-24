import * as React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styled from 'styled-components/native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Text, ActivityIndicator } from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'

type ReviewScreenRouteProp = RouteProp<RootStackParamList, 'Review'>
type ReviewScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Review'>

interface Props {
  route: ReviewScreenRouteProp
  navigation: ReviewScreenNavigationProp
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
  padding: 12px 8px;
  width: 280px;
  border-radius: 20px;
`

const Review: React.FC<Props> = ({ route, navigation }) => {
  const { name: restaurantName } = route.params.item
  const { useState } = React

  const [name, setName] = useState<string>('')
  const [rating, setRating] = useState<number>(0)
  const [comment, setComment] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleSubmit = async () => {
    const submitData = { name, rating, comment }
    setIsSubmitting(true)
    const response = await axios({
      url: 'http://localhost:3000/review',
      method: 'post',
      data: submitData,
    })

    const data = await response.data

    setIsSubmitting(false)
    setName('')
    setRating(0)
    setComment('')
    navigation.goBack()
  }

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

      {isSubmitting && <ActivityIndicator size="large" color="#333" />}
      <BtnSubmit onPress={handleSubmit} disabled={isSubmitting}>
        <Text style={{ textAlign: 'center', fontSize: 20 }}>Submit</Text>
      </BtnSubmit>
    </KeyboardAwareScrollView>
  )
}
export default Review
