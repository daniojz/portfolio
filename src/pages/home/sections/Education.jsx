import { useTranslation } from 'react-i18next'
import style from '@sectionsStyles/education.module.scss'
import TitulationCard from '../../../components/TitulationCard/TitulationCard'
import ArrowButton from '../../../components/ArrowButton/ArrowButton'

const Education = () => {
  const [t] = useTranslation('home', { keyPrefix: 'education' })
  const [globalTitles] = useTranslation('global', { keyPrefix: 'global.titles' })

  return (
    <section id='Education' className={style.educationContainer}>
      <div className={style.titulationCards}>
        <h2 className={style.header}>{globalTitles(`education`)}</h2>
        {t('titulationCards').map((card) => (
          <TitulationCard key={card.id} titulationCard={card}></TitulationCard>
        ))}
        <div className={style.seeCertifications}>
          <span>{t('seeCertifications')}</span>
          <span>
            <ArrowButton></ArrowButton>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Education
