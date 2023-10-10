import { useTranslation } from 'react-i18next'
import style from '@styles/modules/skills.module.scss'
import TechSkills from '../../../components/TechSkills/TechSkills'

const Skills = () => {
  const [t] = useTranslation('home', { keyPrefix: 'skills' })

  return (
    <section id='Skills' className={style.skillsContainer}>
      <div className={style.header}>
        <h2>Skills</h2>
      </div>
      <TechSkills></TechSkills>
    </section>
  )
}

export default Skills
