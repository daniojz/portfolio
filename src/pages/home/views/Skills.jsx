import { useTranslation } from 'react-i18next'
import style from '@sectionsStyles/skills.module.scss'
import TechSkills from '../../../components/TechSkills/TechSkills'
import Principles from '../../../components/Principles/Principles'
import { Parallax } from 'react-scroll-parallax'
import ArrowButton from '../../../components/ArrowButton/ArrowButton'
import { useRef } from 'react'

const Skills = () => {
  const [globalTitles] = useTranslation('global', { keyPrefix: 'global.titles' })
  const windowWrapper = useRef()

  const onClickChangeWrapperHandler = () => {
    console.log('hola')
    windowWrapper.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section id='Skills' className={style.skillsContainer}>
      <div ref={windowWrapper} className={style.windowWrapper}>
        <div className={style.header}>
          <h2>{globalTitles(`skills`)}</h2>
        </div>
        <TechSkills></TechSkills>
        <ArrowButton onClick={onClickChangeWrapperHandler} className={style.button}></ArrowButton>
      </div>
      <Principles></Principles>
      <Parallax translateY={['-350px', '0px']}>
        <div className={style.circle}></div>
      </Parallax>
    </section>
  )
}

export default Skills
