import * as React from 'react'
import { Text, View, Button } from 'react-native'

interface Props {
  navigation: any
}

const MyModal: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  )
}
export default MyModal
