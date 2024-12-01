import { useTranslation } from 'react-i18next'
import style from '@sectionsStyles/skills.module.scss'
import TechSkills from '../../../components/TechSkills/TechSkills'
import Principles from '../../../components/Principles/Principles'
import { Parallax } from 'react-scroll-parallax'
import ArrowButton from '../../../components/ArrowButton/ArrowButton'
import { useRef, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Skills = () => {
  const [globalTitles] = useTranslation('global', { keyPrefix: 'global.titles' })
  const [activeContent, setActiveContent] = useState(0)

  const skillsWrapper = useRef()
  const skillsContent = useRef()
  const conceptsContent = useRef()
  const currentContentRef = activeContent === '1' ? skillsContent : conceptsContent

  const contents = [
    <div key='1' ref={skillsContent} className={style.skillsContent}>
      <div className={style.header}>
        <h2>{globalTitles(`skills`)}</h2>
      </div>
      <TechSkills></TechSkills>
      <ArrowButton onClick={() => setActiveContent(1)} className={style.button}></ArrowButton>
    </div>,
    <div key='2' ref={conceptsContent} className={style.conceptsContent}>
      <h2 onClick={() => setActiveContent(1)}>HOLA</h2>
    </div>,
  ]

  const centerScroll = () => {
    console.log('hola')
    skillsWrapper.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section id='Skills' className={style.skillsContainer}>
      <div ref={skillsWrapper} className={style.skillsWrapper}>
        <TransitionGroup>
          <CSSTransition
            key={activeContent}
            nodeRef={currentContentRef}
            timeout={3000}
            classNames={{
              enter: style['wrapperContent-enter'],
              enterActive: style['wrapperContent-enter-active'],
              exit: style['wrapperContent-exit'],
              exitActive: style['wrapperContent-exit-active'],
            }}
            onEnter={centerScroll}
            unmountOnExit
          >
            {contents[activeContent]}
          </CSSTransition>
        </TransitionGroup>
      </div>
      <Principles></Principles>
      <Parallax translateY={['-350px', '0px']}>
        <div className={style.circle}></div>
      </Parallax>
    </section>
  )
}

export default Skills
