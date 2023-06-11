import './App.css'

import {Component} from 'react'

import LanguageItem from './components/LanguageItem'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeLanguageId: languageGreetingsList[0].id,
    greetingImage: languageGreetingsList[0].imageUrl,
    imageAltTxt: languageGreetingsList[0].imageAltText,
  }

  getCorrespondingGreeting = (image, altTxt, id) => {
    this.setState({
      greetingImage: image,
      imageAltTxt: altTxt,
      activeLanguageId: id,
    })
  }

  render() {
    const {activeLanguageId, greetingImage, imageAltTxt} = this.state
    return (
      <div className="app-container">
        <h1 className="main-heading">Multilingual Greetings</h1>
        <ul className="greetings-container">
          {languageGreetingsList.map(eachLanguage => (
            <LanguageItem
              languageDetails={eachLanguage}
              key={eachLanguage.id}
              getCorrespondingGreeting={this.getCorrespondingGreeting}
              isActive={activeLanguageId === eachLanguage.id}
            />
          ))}
        </ul>

        <div>
          <img height={350} width={260} src={greetingImage} alt={imageAltTxt} />
        </div>
      </div>
    )
  }
}

export default App
