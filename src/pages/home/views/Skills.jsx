import { useTranslation } from 'react-i18next'
import style from '@sectionsStyles/skills.module.scss'
import TechSkills from '../../../components/TechSkills/TechSkills'
import Principles from '../../../components/Principles/Principles'
import { Parallax } from 'react-scroll-parallax'
import ArrowButton from '../../../components/ArrowButton/ArrowButton'
import { useRef, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const Skills = () => {
  const [globalTitles] = useTranslation('global', { keyPrefix: 'global.titles' })
  const [activeContentState, setActiveContentState] = useState(true)

  const skillsWrapper = useRef()
  const skillsComponent = useRef(null)
  const conceptsComponent = useRef(null)
  const currentContentRef = activeContentState ? skillsComponent : conceptsComponent

  const centerScroll = () => {
    console.log('hola')

    skillsWrapper.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    document.body.style.overflow = 'hidden' // Bloquear scroll
  }

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
            onEnter={centerScroll}
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
        <div className={style.circle}></div>
      </Parallax>
    </section>
  )
}

export default Skills
