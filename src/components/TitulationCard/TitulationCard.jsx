import style from '@componentsStyles/titulationCard.module.scss'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import TagsContainer from '../TagsContainer/TagsContainer'

const TitulationCard = ({ titulationCard }) => {
  const [t] = useTranslation('home', { keyPrefix: 'education' })

  return (
    <div className={style.titulationCard}>
      <div className={style.header}>
        <h1 className={style.title}>{titulationCard.title}</h1>
        <h2 className={style.description}>{titulationCard.description}</h2>
        <div className={style.collegeName}>
          <img src={titulationCard.collegeIcon}></img>
          <p>{titulationCard.collegeName}</p>
        </div>
      </div>
      <div className={style.content}>
        <p className={style.averageGrade}>
          {t('averageGrade') + ': ' + titulationCard.averageGrade}
        </p>
        <TagsContainer aptitudes={titulationCard.aptitudes}></TagsContainer>
        <div className={style.dateAndPlace}>
          <span>{titulationCard.date}</span>
          <span>{titulationCard.city}</span>
        </div>
      </div>
    </div>
  )
}

TitulationCard.propTypes = {
  titulationCard: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    collegeIcon: PropTypes.string,
    collegeName: PropTypes.string,
    averageGrade: PropTypes.string,
    date: PropTypes.string,
    city: PropTypes.string,
    aptitudes: PropTypes.arrayOf(PropTypes.string),
  }),
}
export default TitulationCard
