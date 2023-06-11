import './index.css'

const LanguageItem = props => {
  const {languageDetails, getCorrespondingGreeting, isActive} = props
  const {buttonText, imageUrl, imageAltText, id} = languageDetails
  console.log(isActive)

  const buttonStyling = isActive ? 'active-btn' : 'in-active-btn'

  const onChangeLanguage = () => {
    getCorrespondingGreeting(imageUrl, imageAltText, id)
  }

  return (
    <li className="language-item">
      <button
        type="button"
        onClick={onChangeLanguage}
        className={`button ${buttonStyling}`}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageItem
