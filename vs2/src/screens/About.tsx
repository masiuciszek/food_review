import * as React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome5'

interface Props {}

const StyledAbout = styled.View`
  flex: 1;
`

const Title = styled.Text`
  padding: 20px;
  margin-top: 60px;
  font-size: 30px;
  text-align: center;
  text-transform: capitalize;
`
const Text = styled.Text`
  padding: 15px;
  line-height: 26px;
  font-size: 17px;
  margin-top: 30px;
`

const Image = styled.Image``

const About: React.FC<Props> = () => {
  return (
    <StyledAbout>
      <Title>About Food Review</Title>
      <Icon name="pizza-slice" size={70} color="#40C4FF" style={{ textAlign: 'center', marginBottom: 30 }} />

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ipsa iure dolorem officia blanditiis vel atque, officiis perferendis esse dignissimos est, soluta
        reprehenderit labore molestias. Suscipit laudantium asperiores unde inventore eum quisquam laboriosam assumenda nesciunt maiores iure. Ullam aliquam, error similique quas
      </Text>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ipsa iure dolorem officia blanditiis vel atque, officiis perferendis esse dignissimos est, soluta
        reprehenderit labore molestias. Suscipit laudantium asperiores unde inventore eum quisquam laboriosam assumenda nesciunt maiores iure. Ullam aliquam, error similique quas
      </Text>
    </StyledAbout>
  )
}
export default About
