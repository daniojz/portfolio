import { Icon } from '@iconify/react'
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import ThemeButton from '../../components/ThemeButton/ThemeButton'
import LanguajeButton from '../LanguajeButton/LanguajeButton'
import style from '@styles/modules/navMenu.module.scss'

const NavMenu = () => {
  const [t] = useTranslation('global', { keyPrefix: 'navMenu' })
  const [mobileState, setMobileState] = useState('hidden')
  const content = useRef()
  const nav = useRef()
  const navOptions = useRef()

  const addStyles = () => {
    const options = [...navOptions.current.children]
    let seconds = 0

    for (let i = 0; i < options.length; i++) {
      const option = options[i]
      seconds = seconds + 0.05
      option.style.transitionDelay = seconds + 0.05 + 's'
    }
  }

  const onClickHamburguerHandler = () => {
    const options = [...navOptions.current.children]

    if (mobileState === 'hidden') {
      setMobileState('show')

      content.current.classList.add(`${style.isContentShow}`)
      nav.current.classList.add(`${style.isNavOpen}`)
      options.forEach((option) => option.classList.add(`${style.isNavOptionShow}`))
    } else {
      setMobileState('hidden')

      content.current.classList.remove(`${style.isContentShow}`)
      nav.current.classList.remove(`${style.isNavOpen}`)
      options.forEach((option) => option.classList.remove(`${style.isNavOptionShow}`))
    }
  }

  const onClickOptionHandler = () => {
    const options = [...navOptions.current.children]

    if (mobileState !== 'hidden') {
      setMobileState('hidden')

      content.current.classList.remove(`${style.isContentShow}`)
      nav.current.classList.remove(`${style.isNavOpen}`)
      options.forEach((option) => option.classList.remove(`${style.isNavOptionShow}`))
    }
  }

  useEffect(() => {
    addStyles()

    const handleResize = (event) => {
      const screenWith = window.screen.width
      const options = [...navOptions.current.children]

      if (screenWith >= 992 && mobileState === 'hidden') {
        setMobileState('hidden')
        nav.current.classList.remove(`${style.isNavOpen}`)
        options.forEach((option) => option.classList.remove(`${style.isNavOptionShow}`))
      }
      if (screenWith < 992) {
        nav.current.classList.add(`${style.resizeAnimationStopper}`)
        setTimeout(() => {
          nav.current.classList.remove(`${style.resizeAnimationStopper}`)
        }, 400)
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.addEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className={style.navMenu} ref={nav}>
      <button onClick={onClickHamburguerHandler} className={style.hamburgerButton}>
        <Icon
          icon={`akar-icons:${
            mobileState === 'show' ? 'two-line-vertical' : 'two-line-horizontal'
          }`}
          width={40}
          height={40}
        />
      </button>
      <div className={style.content} ref={content}>
        <a href='/' className={style.homeLink}>
          <span>{t(`homeLinkText`)}</span>
        </a>
        <div className={style.options}>
          <ul className={style.navOptions} ref={navOptions}>
            {t(`options`).map((option) => (
              <li key={option.name} onClick={onClickOptionHandler}>
                <a href={`#${option.anchor}`}>{option.name}</a>
              </li>
            ))}
          </ul>
          <div className={style.config}>
            <ThemeButton></ThemeButton>
            <LanguajeButton></LanguajeButton>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavMenu
