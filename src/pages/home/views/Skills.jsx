import { useTranslation } from 'react-i18next'
import style from '@sectionsStyles/skills.module.scss'
import TechSkills from '../../../components/TechSkills/TechSkills'
import Principles from '../../../components/Principles/Principles'
import { Parallax } from 'react-scroll-parallax'
import ArrowButton from '../../../components/ArrowButton/ArrowButton'
import { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const Skills = () => {
  const [globalTitles] = useTranslation('global', { keyPrefix: 'global.titles' })
  const [showConcepts, setShowConcepts] = useState(true)
  const [showSkills, setShowSkills] = useState(true)

  const skillsWrapper = useRef()
  const conceptsWrapper = useRef()

  const onClickChangeWrapperHandler = () => {
    console.log('hola')
    // skillsWrapper.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section id='Skills' className={style.skillsContainer}>
      <CSSTransition
        in={showSkills}
        timeout={2000}
        nodeRef={skillsWrapper}
        classNames={{
          enter: style['skillsWrapper-enter'],
          enterActive: style['skillsWrapper-enterActive'],
          exit: style['skillsWrapper-exit'],
          exitActive: style['skillsWrapper-exitActive'],
        }}
        unmountOnExit
      >
        <div ref={skillsWrapper} className={style.skillsWrapper}>
          <div className={style.header}>
            <h2>{globalTitles(`skills`)}</h2>
          </div>
          <TechSkills></TechSkills>
          <ArrowButton onClick={() => setShowSkills(false)} className={style.button}></ArrowButton>
        </div>
      </CSSTransition>
      {!showSkills && (
        <div ref={conceptsWrapper} className={style.conceptsWrapper}>
          <h2 onClick={() => setShowSkills(true)}>HOLA</h2>
        </div>
      )}
      <Principles></Principles>
      <Parallax translateY={['-350px', '0px']}>
        <div className={style.circle}></div>
      </Parallax>
    </section>
  )
}

export default Skills
