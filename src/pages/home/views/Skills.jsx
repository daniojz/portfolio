import { useTranslation } from 'react-i18next'
import style from '@sectionsStyles/skills.module.scss'
import TechSkills from '../../../components/TechSkills/TechSkills'
import Principles from '../../../components/Principles/Principles'
import { Parallax } from 'react-scroll-parallax'
import ArrowButton from '../../../components/ArrowButton/ArrowButton'
import { useEffect, useRef, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const Skills = () => {
  const [globalTitles] = useTranslation('global', { keyPrefix: 'global.titles' })
  const [activeContentState, setActiveContentState] = useState(true)

  const skillsWrapper = useRef()
  const skillsComponent = useRef(null)
  const conceptsComponent = useRef(null)
  const currentContentRef = activeContentState ? skillsComponent : conceptsComponent

  const focusSection = () => {
    skillsWrapper.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  const disableScrolling = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    const AppContainer = document.getElementById('AppContainer')

    if (activeContentState) {
      AppContainer.removeEventListener('wheel', disableScrolling)
    } else {
      focusSection()

      AppContainer.addEventListener('wheel', disableScrolling, { passive: false })
    }

    return () => AppContainer.removeEventListener('wheel', disableScrolling)
  }, [activeContentState])

  return (
    <section id='Skills' className={style.skillsContainer}>
      <div ref={skillsWrapper} className={style.skillsWrapper}>
        <SwitchTransition>
          <CSSTransition
            key={activeContentState}
            nodeRef={currentContentRef}
            addEndListener={(done) =>
              currentContentRef.current.addEventListener('transitionend', done, false)
            }
            classNames={{
              enter: style['fade-enter'],
              enterActive: style['fade-enter-active'],
              exit: style['fade-exit'],
              exitActive: style['fade-exit-active'],
            }}
          >
            <div ref={currentContentRef}>
              {activeContentState ? (
                <div className={style.skillsContent}>
                  <div className={style.header}>
                    <h2>{globalTitles(`skills`)}</h2>
                  </div>
                  <TechSkills />
                  <ArrowButton
                    onClick={() =>
                      setActiveContentState((activeContentState) => !activeContentState)
                    }
                    className={style.button}
                  />
                </div>
              ) : (
                <div className={style.conceptsContent}>
                  <h2
                    onClick={() =>
                      setActiveContentState((activeContentState) => !activeContentState)
                    }
                  >
                    HOLA
                  </h2>
                </div>
              )}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <Principles></Principles>
      <Parallax translateY={['-350px', '0px']}>
        <div className={style.circleContainer}>
          <span
            className={`${style.circle} ${
              activeContentState ? '' : style['circle-concepts-active']
            }`}
          ></span>
        </div>
      </Parallax>
    </section>
  )
}

export default Skills
