import { Icon } from '@iconify/react'
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { MediumScreen } from '../../constants/breakpoints'
import { useMediaQuery } from 'react-responsive'
import ThemeButton from '../../components/ThemeButton/ThemeButton'
import LanguajeButton from '../LanguajeButton/LanguajeButton'
import style from '@componentsStyles/navMenu.module.scss'

const NavMenu = () => {
  const [t] = useTranslation('global', { keyPrefix: 'navMenu' })

  const [hamburguerMenuState, setHamburguerMenuState] = useState('hidden') // estado de menu en modo hamburguer (menu movil y tablet) -> oculto o desplegado
  const isMobileScreen = useMediaQuery({ query: `(max-width: ${MediumScreen}px` })
  const content = useRef()
  const nav = useRef()
  const navOptions = useRef()
  const configOption = useRef();

  // añade estilo de transitionDelay de manera incremental a cada option del menu
  const addStyles = () => {
    const childrenOptions = [...navOptions.current.children]
    let seconds = 0

    for (let i = 0; i < childrenOptions.length; i++) {
      const option = childrenOptions[i]
      seconds = seconds + 0.05
      option.style.transitionDelay = seconds + 0.05 + 's'
    }
  }

  // click en boton de menu hamburger
  const onClickHamburguerMenuHandler = () => {

    if (hamburguerMenuState === 'hidden') {
      setHamburguerMenuState('show')
      document.body.classList.add('no-scroll');

    } else {
      setHamburguerMenuState('hidden')
      document.body.classList.remove('no-scroll');
    }
  }

  // click en cada option del menu
  const onClickOptionHandler = () => {
    if (hamburguerMenuState === 'show') {
      setHamburguerMenuState('hidden')
      document.body.classList.remove('no-scroll');
    }
  }

  useEffect(() => {
    setHamburguerMenuState((currentHamburguerMenuState) => {
      if (!isMobileScreen && currentHamburguerMenuState === 'show') {
        return 'hidden'
      }
      if (isMobileScreen && currentHamburguerMenuState === 'hidden') {
        // nav.current.classList.add(`${style.resizeAnimationStopper}`)
        // setTimeout(() => {
        //   nav.current.classList.remove(`${style.resizeAnimationStopper}`)
        // }, 100)
        content.current.style.display = "none";
        setTimeout(() => {
          content.current.style.display = "";
      }, 100)
      }

      nav.current.classList.add(`${style.resizeAnimationStopper}`)
        setTimeout(() => {
        nav.current.classList.remove(`${style.resizeAnimationStopper}`)
      }, 1000)

        return currentHamburguerMenuState; // Mantiene el estado actual sin cambiarlo
    });

  }, [isMobileScreen]); // Solo ejecuta cuando cambia isMobileScreen (cuando la query max-width supera el valor de MediumScreen)

  useEffect(() => {
    const childrenOptions = [...navOptions.current.children]

    if (hamburguerMenuState === 'show') {

      content.current.classList.add(`${style.isContentShow}`)
      nav.current.classList.add(`${style.isNavOpen}`)
      childrenOptions.forEach((option) => option.classList.add(`${style.isNavOptionShow}`))
      configOption.current.classList.add(`${style.isNavOptionShow}`)

    } else if (hamburguerMenuState === 'hidden') {
      content.current.classList.remove(`${style.isContentShow}`)
      nav.current.classList.remove(`${style.isNavOpen}`)
      childrenOptions.forEach((option) => option.classList.remove(`${style.isNavOptionShow}`))
      configOption.current.classList.remove(`${style.isNavOptionShow}`)
    }

  }, [hamburguerMenuState])

  useEffect(() => {
    addStyles()

    if (!(window.screen.width < MediumScreen)) {
      setHamburguerMenuState('hidden')
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
        <div className={style.options}>
          <ul className={style.navOptions} ref={navOptions}>
            {t(`options`).map((option) => (
              <li key={option.name} onClick={onClickOptionHandler}>
                <a href={`#${option.anchor}`}>{option.name}</a>
              </li>
            ))}
          </ul>
          <div className={style.config} ref={configOption}>
            <ThemeButton></ThemeButton>
            <LanguajeButton></LanguajeButton>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavMenu
