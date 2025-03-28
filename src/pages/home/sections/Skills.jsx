import { useTranslation } from 'react-i18next'
import style from '@sectionsStyles/skills.module.scss'
import TechSkills from '../../../components/TechSkills/TechSkills'
import Principles from '../../../components/Principles/Principles'
import { Parallax } from 'react-scroll-parallax'
import ArrowButton from '../../../components/ArrowButton/ArrowButton'
import { useEffect, useRef, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const Skills = () => {
  const [text] = useTranslation('home', { keyPrefix: 'skills' })
  const [activeContentState, setActiveContentState] = useState(true)

  const skillsWrapper = useRef()
  const skillsComponent = useRef(null)
  const knowledgeComponent = useRef(null)
  const currentContentRef = activeContentState ? skillsComponent : knowledgeComponent

  const SkillsComponent = () => {
    return (
      <div className={style.skillsContent}>
        <div className={style.header}>
          <h2>{text(`titleSection`)}</h2>
        </div>
        <TechSkills />
        <ArrowButton
          onClick={() => setActiveContentState((activeContentState) => !activeContentState)}
          className={style.button}
        />
      </div>
    )
  }
  const KnowledgeComponent = () => {
    return (
      <div className={style.knowledgeContent}>
        <div className={style.header}>
          <h2>{text(`knowledge.titleSection`)}</h2>
        </div>
        <div className={style.searchFilterContainer}>
          <input className={style.searchFilter}></input>
        </div>
        <ArrowButton
          onClick={() => setActiveContentState((activeContentState) => !activeContentState)}
          className={style.button}
          direction='left'
        />
      </div>
    )
  }
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
            addEndListener={(done) => currentContentRef.current.addEventListener('transitionend', done, false)}
            classNames={{
              enter: style['fade-enter'],
              enterActive: style['fade-enter-active'],
              exit: style['fade-exit'],
              exitActive: style['fade-exit-active'],
            }}
          >
            <div ref={currentContentRef}>
              {activeContentState ? <SkillsComponent></SkillsComponent> : <KnowledgeComponent></KnowledgeComponent>}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <Principles></Principles>
      <Parallax translateY={['-350px', '0px']}>
        <div className={style.circleContainer}>
          <span className={`${style.circle} ${activeContentState ? '' : style['circle-knowledge-active']}`}></span>
        </div>
      </Parallax>
    </section>
  )
}

export default Skills
