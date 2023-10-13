import styled from 'styled-components'

export const CharacterCounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px;
  height: 100vh;
`
export const CharacterCounterOutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 90vh;
  width: 50%;
  background-color: #ffbf1f;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-family: 'Roboto';
`
export const CharacterCounterInputContainer = styled(
  CharacterCounterOutputContainer,
)`
  border-radius: 0;
  background-color: #0f172a;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`
export const InputContainerTitle = styled.h1`
  color: #ffbf1f;
  font-size: 25px;
`
export const InputContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`
export const InputCard = styled.input`
  background-color: #ffffff;
  color: #475569;
  padding: 15px;
  border-radius: 5px;
  outline: none;
  width: 80%;
  border: none;
`
export const AddButton = styled.button`
  background-color: #ffc533;
  color: #475569;
  padding: 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`
export const OutputContainerTitle = styled.h1`
  color: #0f172a;
  font-size: 25px;
  width: 350px;
  align-self: flex-start;
  padding-left: 20px;
`
export const OutputListContainer = styled.ul`
  background-color: #ffc533;
  list-style-type: none;
  width: 100%;
  height: 90vh;
`
export const NoUserInputImg = styled.img`
  height: 300px;
`
