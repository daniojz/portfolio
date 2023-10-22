import { useTranslation } from 'react-i18next'
import style from '@sectionsStyles/experience.module.scss'
import ExperienceCard from '../../../components/ExperienceCard/ExperienceCard'

const Experience = () => {
  const [t] = useTranslation('home', { keyPrefix: 'experience' })
  const [global] = useTranslation('global', { keyPrefix: 'global.titles' })

  return (
    <section id='Experience'>
      <div className={style.experienceContainer}>
        <div className={style.header}>
          <h2>{global('experience')}</h2>
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
