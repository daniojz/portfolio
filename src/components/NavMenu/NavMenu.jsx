import { Icon } from '@iconify/react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import ThemeButton from '../../components/ThemeButton/ThemeButton'
import PropTypes from 'prop-types'
import style from '@styles/modules/navMenu.module.scss'

const NavMenu = ({ styles, iconSize }) => {
  const [t, i18n] = useTranslation('global')
  const [mobileState, setMobileState] = useState('show')

  const onClickHandler = () => {
    const content = document.getElementsByClassName(`${style.content}`)[0]
    const nav = document.getElementsByClassName(`${style.navMenu}`)[0]
    const navOptions = [...document.getElementsByClassName(`${style.navOptions}`)[0].children]

    if (mobileState === 'show') {
      setMobileState('hidden')

      content.classList.add(`${style.isContentShow}`)
      nav.classList.add(`${style.isNavOpen}`)
      navOptions.forEach((option) => option.classList.add(`${style.isNavOptionShow}`))
    } else {
      setMobileState('show')

      content.classList.remove(`${style.isContentShow}`)
      nav.classList.remove(`${style.isNavOpen}`)
      navOptions.forEach((option) => option.classList.remove(`${style.isNavOptionShow}`))
    }
  }

  useEffect(() => {
    const navOptions = [...document.getElementsByClassName(`${style.navOptions}`)[0].children]
    for (let i = 0; i < navOptions.length; i++) {
      const option = navOptions[i]
      option.style.transitionDelay = '0.' + i + 's'
    }
  }, [])

  return (
    <nav className={style.navMenu}>
      <button onClick={onClickHandler} className={style.hamburgerButton}>
        <Icon
          icon={`akar-icons:${
            mobileState === 'show' ? 'two-line-horizontal' : 'two-line-vertical'
          }`}
          width={40}
          height={40}
        />
      </button>
      <div className={style.content}>
        <ul className={style.navOptions}>
          <li>
            <a href='#experience'>{t(`header.navMenu.option1`)}</a>
          </li>
          <li>
            <a href={`#${t(`header.navMenu.option2`)}`}>{t(`header.navMenu.option2`)}</a>
          </li>
          <li>
            <a href={`#${t(`header.navMenu.option3`)}`}>{t(`header.navMenu.option3`)}</a>
          </li>
          <li>
            <a href={`#${t(`header.navMenu.option4`)}`}>{t(`header.navMenu.option4`)}</a>
          </li>
          <li>
            <a href={`#${t(`header.navMenu.option5`)}`}>{t(`header.navMenu.option5`)}</a>
          </li>
          <li>
            <a href={`#${t(`header.navMenu.option6`)}`}>{t(`header.navMenu.option6`)}</a>
          </li>
        </ul>
        <div className={style.config}>
          <ThemeButton></ThemeButton>
          <p>idioma</p>
        </div>
      </div>
    </nav>
  )
}

NavMenu.propTypes = {
  styles: PropTypes.string,
  iconSize: PropTypes.number,
}

NavMenu.defaultProps = {
  iconSize: 32,
}

export default NavMenu
