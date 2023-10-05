import PropTypes from 'prop-types'
import style from '@styles/modules/experienceCard.module.scss'
import ExperienceInfo from '../ExperieceInfo/ExperieceInfo'

const ExperienceCard = ({ experienceCard }) => {
  return (
    <div className={style.experienceCard}>
      <div className={style.header}>
        <h4>{experienceCard.companyName}</h4>
        <img src={experienceCard.companyIcon}></img>
      </div>
      <div className={style.content}>
        {experienceCard.experienceInfos.map((info) => (
          <ExperienceInfo
            key={info.id}
            jobTitle={info.jobTitle}
            startDate={info.startDate}
            finishDate={info.finishDate}
            actualWork={info.actualWork}
            description={info.description}
            aptitudes={info.aptitudes}
          ></ExperienceInfo>
        ))}
      </div>
    </div>
  )
}

ExperienceCard.propTypes = {
  experienceCard: PropTypes.shape({
    id: PropTypes.string,
    companyName: PropTypes.string,
    companyIcon: PropTypes.string,
    experienceInfos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        jobTitle: PropTypes.string,
        startDate: PropTypes.string,
        finishDate: PropTypes.string,
        actualWork: PropTypes.bool,
        description: PropTypes.string,
        aptitudes: PropTypes.arrayOf(PropTypes.string),
      }),
    ),
  }),
}

export default ExperienceCard
