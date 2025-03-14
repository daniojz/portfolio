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
  const [activeContentState, setActiveContentState] = useState('skills')

  const skillsWrapper = useRef()
  const skillsComponent = useRef(null)
  const conceptsComponent = useRef(null)
  const currentContentRef = activeContentState === 'skills' ? skillsComponent : conceptsComponent
  const skillsContent = (
    <div ref={skillsComponent} className={style.skillsContent}>
      <div className={style.header}>
        <h2>{globalTitles(`skills`)}</h2>
      </div>
      <TechSkills></TechSkills>
      <ArrowButton
        onClick={() => setActiveContentState('concepts')}
        className={style.button}
      ></ArrowButton>
    </div>
  )
  const conceptsContent = (
    <div ref={conceptsComponent} className={style.conceptsContent}>
      <h2 onClick={() => setActiveContentState('skills')}>HOLA</h2>
    </div>
  )

  const centerScroll = () => {
    console.log('hola')
    skillsWrapper.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section id='Skills' className={style.skillsContainer}>
      <div ref={skillsWrapper} className={style.skillsWrapper}>
        <SwitchTransition>
          <CSSTransition
            key={activeContentState}
            nodeRef={activeContentState === 'skills' ? skillsComponent : conceptsComponent}
            addEndListener={(done) =>
              currentContentRef.current.addEventListener('transitionend', done, false)
            }
            onEnter={centerScroll}
            classNames='fade'
            unmountOnExit
          >
            {activeContentState === 'skills' ? skillsContent : conceptsContent}
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
