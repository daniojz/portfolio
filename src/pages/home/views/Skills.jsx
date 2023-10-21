import { useTranslation } from 'react-i18next'
import style from '@sectionsStyles/skills.module.scss'
import TechSkills from '../../../components/TechSkills/TechSkills'
import Principles from '../../../components/Principles/Principles'

const Skills = () => {
  const [t] = useTranslation('global', { keyPrefix: 'global.titles' })

  return (
    <section id='Skills' className={style.skillsContainer}>
      <div className={style.header}>
        <h2>{t(`skills`)}</h2>
      </div>
      <TechSkills></TechSkills>
      <Principles></Principles>
      <div className={style.circle}></div>
    </section>
  )
}

export default Skills
