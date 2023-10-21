import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import style from '@componentsStyles/idiomButton.module.scss'

const LanguajeButton = () => {
  const { i18n } = useTranslation()
  const [selectedIdiom, setSelectedIdiom] = useState(i18n.language)

  const onChangeHandler = (e) => {
    const idiom = e.target.value

    i18n.changeLanguage(idiom).then((t) => {
      console.log(t('key'))
    })

    setSelectedIdiom(idiom)
  }

  return (
    <div className={style.selectWrapper}>
      <select
        title='idiomButton'
        onChange={onChangeHandler}
        value={selectedIdiom}
        className={style.idiomButton}
      >
        {i18n.languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
      {/* <Icon
        className={style.idiomButton}
        icon='akar-icons:chevron-down-small'
        width={40}
        height={40}
      /> */}
    </div>
  )
}
export default LanguajeButton
