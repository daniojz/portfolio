import { useTranslation } from 'react-i18next'
import style from '@sectionsStyles/skills.module.scss'
import TechSkills from '../../../components/TechSkills/TechSkills'
import Principles from '../../../components/Principles/Principles'
import { Parallax } from 'react-scroll-parallax'
import ArrowButton from '../../../components/ArrowButton/ArrowButton'

const Skills = () => {
  const [globalTitles] = useTranslation('global', { keyPrefix: 'global.titles' })

  return (
    <section id='Skills' className={style.skillsContainer}>
      <div className={style.header}>
        <h2>{globalTitles(`skills`)}</h2>
      </div>
      <TechSkills></TechSkills>
      <ArrowButton className={style.button}></ArrowButton>
      <Principles></Principles>
      <Parallax translateY={['-250px', '0px']}>
        <div className={style.circle}></div>
      </Parallax>
    </section>
  )
}

export default Skills
