import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CharacterItem from '../CharacterItem'

import {
  CharacterCounterContainer,
  CharacterCounterOutputContainer,
  CharacterCounterInputContainer,
  InputContainerTitle,
  InputContainer,
  InputCard,
  AddButton,
  OutputContainerTitle,
  OutputListContainer,
  NoUserInputImg,
} from './styledComponents'

const initialCharacterCounterList = []

class CharacterCounter extends Component {
  state = {inputText: '', characterCounterList: initialCharacterCounterList}

  onChangeText = event => {
    this.setState({inputText: event.target.value})
  }

  onClickAdd = () => {
    const {characterCounterList, inputText} = this.state
    console.log(characterCounterList)
    const newListItem = {
      id: uuidv4(),
      inputText,
      count: inputText.length,
    }
    if (inputText !== '') {
      this.setState(prevState => ({
        characterCounterList: [...prevState.characterCounterList, newListItem],
        inputText: '',
      }))
    }
  }

  renderInputContainer = () => {
    const {inputText} = this.state

    return (
      <CharacterCounterInputContainer>
        <InputContainerTitle>Character Counter</InputContainerTitle>
        <InputContainer>
          <InputCard
            type="text"
            placeholder="Enter the Characters here"
            value={inputText}
            onChange={this.onChangeText}
          />
          <AddButton type="button" onClick={this.onClickAdd}>
            Add
          </AddButton>
        </InputContainer>
      </CharacterCounterInputContainer>
    )
  }

  renderOutputContainer = () => {
    const {characterCounterList} = this.state

    return (
      <CharacterCounterOutputContainer>
        <OutputContainerTitle>
          Count the characters like a Boss...
        </OutputContainerTitle>
        <OutputListContainer>
          {characterCounterList.length > 0 ? (
            characterCounterList.map(eachItem => (
              <CharacterItem itemDetails={eachItem} key={eachItem.id} />
            ))
          ) : (
            <NoUserInputImg
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          )}
        </OutputListContainer>
      </CharacterCounterOutputContainer>
    )
  }

  render() {
    return (
      <CharacterCounterContainer>
        {this.renderOutputContainer()}
        {this.renderInputContainer()}
      </CharacterCounterContainer>
    )
  }
}

export default CharacterCounter
