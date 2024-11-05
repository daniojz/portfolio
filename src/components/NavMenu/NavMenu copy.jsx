import { Icon } from '@iconify/react'
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { MediumScreen } from '../../constants/breakpoints'
import debounce from '../../hooks/debounce'
import ThemeButton from '../../components/ThemeButton/ThemeButton'
import LanguajeButton from '../LanguajeButton/LanguajeButton'
import style from '@componentsStyles/navMenu.module.scss'

const NavMenu = () => {
  const [t] = useTranslation('global', { keyPrefix: 'navMenu' })

  const [hamburguerMenuState, setHamburguerMenuState] = useState('hidden') // estado de menu en modo hamburguer (menu movil y tablet) -> oculto o desplegado
  const [seconds, setSeconds] = useState(0)
  // const [isMobileScreen, setIsMobileScreen] = useState(window.screen.width < MediumScreen)
  const isMobileScreen = useMediaQuery(`(max-width: ${MediumScreen}px)`);

  const content = useRef()
  const nav = useRef()
  const navOptions = useRef()
  const options = useRef()

  // añade estilo de transitionDelay de manera incremental a cada option del menu
  const addStyles = () => {
    const childrenOptions = [...navOptions.current.children]
    let seconds = 0

    for (let i = 0; i < childrenOptions.length; i++) {
      const option = childrenOptions[i]
      seconds = seconds + 0.05
      option.style.transitionDelay = seconds + 0.05 + 's'
    }

    setSeconds((seconds + 0.2) * 1000)
  }

  // click en boton de menu hamburger
  const onClickHamburguerMenuHandler = () => {
    const childrenOptions = [...navOptions.current.children]

    if (hamburguerMenuState === 'hidden') {
      setHamburguerMenuState('show')

      content.current.classList.add(`${style.isContentShow}`)
      nav.current.classList.add(`${style.isNavOpen}`)
      childrenOptions.forEach((option) => option.classList.add(`${style.isNavOptionShow}`))
    } else {
      setHamburguerMenuState('hidden')

      content.current.classList.remove(`${style.isContentShow}`)
      nav.current.classList.remove(`${style.isNavOpen}`)
      childrenOptions.forEach((option) => option.classList.remove(`${style.isNavOptionShow}`))
    }
  }

  // click en cada option del menu
  const onClickOptionHandler = () => {
    const options = [...navOptions.current.children]

    if (hamburguerMenuState === 'show') {
      setHamburguerMenuState('hidden')

      content.current.classList.remove(`${style.isContentShow}`)
      nav.current.classList.remove(`${style.isNavOpen}`)
      options.forEach((option) => option.classList.remove(`${style.isNavOptionShow}`))
    }
  }

  const handleResize = debounce((event) => {
    const options = [...navOptions.current.children]

    console.log(hamburguerMenuState)
    if (!isMobileScreen && hamburguerMenuState === 'hidden') {
      setHamburguerMenuState('hidden')

      content.current.classList.remove(`${style.isContentShow}`)
      nav.current.classList.remove(`${style.isNavOpen}`)
      options.forEach((option) => option.classList.remove(`${style.isNavOptionShow}`))
    }
    //si ahora es pantalla de movil (window.screen.width) y antes lo era (isMobileScreen)...
    if (window.screen.width < MediumScreen && !isMobileScreen) {
      nav.current.classList.add(`${style.resizeAnimationStopper}`)
      setTimeout(() => {
        nav.current.classList.remove(`${style.resizeAnimationStopper}`)
      }, 400)
    }

    setIsMobileScreen(window.screen.width < MediumScreen)
  }, 200);

  useEffect(() => {
    addStyles()
    const options = [...navOptions.current.children]

    if (!(window.screen.width < MediumScreen)) {
      setHamburguerMenuState('hidden')

      content.current.classList.remove(`${style.isContentShow}`)
      nav.current.classList.remove(`${style.isNavOpen}`)
      options.forEach((option) => option.classList.remove(`${style.isNavOptionShow}`))
    } else {
      setHamburguerMenuState('hidden')
    }

    
    window.addEventListener('resize', (handleResize))

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className={style.navMenu} ref={nav}>
      <button onClick={onClickHamburguerMenuHandler} className={style.hamburgerButton}>
        <Icon
          icon={`akar-icons:${
            hamburguerMenuState === 'show' ? 'two-line-vertical' : 'two-line-horizontal'
          }`}
          width={40}
          height={40}
        />
      </button>
      <div className={style.content} ref={content}>
        <a href='/' className={style.homeLink}>
          <span>{t(`homeLinkText`)}</span>
        </a>
        <div className={style.options} ref={options}>
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
