import {Component} from 'react'
import {v4} from 'uuid'
import {
  AppContainer,
  AppWidthContainer,
  FirstCard,
  SecondCard,
  FirstCardHeading,
  Img,
  CountList,
  SecondCardHeading,
  InputContainer,
  Input,
  AddButton,
  Span,
} from './styledComponents'

class CharecterCounter extends Component {
  state = {countList: [], inputText: ''}

  onChangeInput = e => {
    this.setState({inputText: e.target.value})
  }

  onSubmitForm = e => {
    e.preventDefault()
    const {countList, inputText} = this.state
    if (inputText.trim().length !== 0) {
      const newItem = {
        id: v4(),
        sentence: inputText,
      }

      this.setState({countList: [...countList, newItem], inputText: ''})
    }
  }

  render() {
    const {countList, inputText} = this.state
    return (
      <AppContainer>
        <AppWidthContainer>
          <FirstCard>
            <FirstCardHeading>
              Count the characters like a Boss...
            </FirstCardHeading>
            {countList.length === 0 ? (
              <Img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            ) : (
              <CountList>
                {countList.map(each => (
                  <li key={each.id}>
                    {each.sentence} : <Span>{each.sentence.length}</Span>
                  </li>
                ))}
              </CountList>
            )}
          </FirstCard>
          <SecondCard>
            <SecondCardHeading>Character Counter</SecondCardHeading>
            <InputContainer onSubmit={this.onSubmitForm}>
              <Input
                type="text"
                placeholder="Enter the Characters here"
                onChange={this.onChangeInput}
                onKeyDown={this.onKeyDownEnter}
                value={inputText}
              />
              <AddButton type="submit" onClick={this.onClickAdd}>
                Add
              </AddButton>
            </InputContainer>
          </SecondCard>
        </AppWidthContainer>
      </AppContainer>
    )
  }
}
export default CharecterCounter
