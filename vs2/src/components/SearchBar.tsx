import * as React from 'react'
import styled from 'styled-components/native'

interface Props {
  text: string
  onSetText: React.Dispatch<React.SetStateAction<string>>
}

const SearBarStyled = styled.TextInput`
  border: 1px solid #333;
  padding: 6px 8px;
  font-size: 16px;
  width: 90%;
  margin: 10px auto;
  border-radius: 12px;
`

const SearchBar: React.FC<Props> = ({ text, onSetText }) => {
  return (
    <SearBarStyled
      placeholder="...search"
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
      onChangeText={(text) => onSetText(text)}
      value={text}
    />
  )
}
export default SearchBar
