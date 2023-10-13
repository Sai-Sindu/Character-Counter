import {CharacterItemCard, CharacterText, Count} from './styledComponents'

const CharacterItem = props => {
  const {itemDetails} = props
  const {count, inputText} = itemDetails

  return (
    <CharacterItemCard>
      <CharacterText>
        {inputText}: <Count>{count}</Count>
      </CharacterText>
    </CharacterItemCard>
  )
}

export default CharacterItem
