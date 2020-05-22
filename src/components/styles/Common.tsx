import styled from 'styled-components/native'

interface SearchProp {
  marginTop?: number
}

const AppWrapper = styled.View`
  flex: 1;
  justify-content: center;
  /* align-items: center; */
`

const Title = styled.Text`
  margin-top: 60px;
  margin-bottom: 60px;
  text-align: center;
  font-size: 30px;
  padding: 10px;
  /* position: absolute; */
  /* top: 15px; */
  /* left: 90px; */
`

const SimpleText = styled.Text`
  font-size: 17px;
  padding: 8px;
  color: #42a5f5;
  text-transform: capitalize;
  text-align: center;
`

const SearchInput = styled.TextInput<SearchProp>`
  font-size: 18px;
  width: 80%;
  background: #e0e0e0;
  border: #333332 1px solid;
  border-radius: 10px;
  margin: 52px auto;
  padding: 10px;
  box-shadow: 3px 5px rgba(0, 0, 0, 0.2);
  margin-top: ${(props) =>
    props.marginTop ? `${props.marginTop.toString()}px` : '10px'};
`

export {Title, AppWrapper, SearchInput, SimpleText}
