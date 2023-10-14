import { useTranslation } from 'react-i18next'
import style from '@styles/modules/experience.module.scss'
import ExperienceCard from '../../../components/ExperienceCard/ExperienceCard'

const Experience = () => {
  const [t] = useTranslation('home', { keyPrefix: 'experience' })

  return (
    <section id='Experience'>
      <div className={style.experienceContainer}>
        <div className={style.header}>
          <h2>Experience</h2>
        </div>
        <div className={style.content}>
          {t('experienceCards').map((card) => (
            <ExperienceCard key={card.id} experienceCard={card}></ExperienceCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
